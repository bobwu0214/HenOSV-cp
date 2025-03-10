# Assuming you have not changed the general structure of the template no modification is needed in this file.
from . import commands
from .lib import fusionAddInUtils as futil
import adsk.core, adsk.fusion, adsk.cam, traceback
import json
import os

_CREATE_CMD_ID = 'createHENOSVCmdId'
_SOLID_CREATE_PANEL_ID = 'SolidCreatePanel'
_PALETTE_OK_BUTTON_TEXT = 'Edit'
_Palette_ID = 'HenOSV_Palette'
_PALETTE_TITLE = 'HenOSV Generator'
_PALETTE_HTML_FILENAME = 'palette.html'
_HenOSV_ID = 'urn:adsk.wipprod:dm.lineage:rWyC_-l1QAGL6SsKUwtU_A'

_handlers = []  # event handlers


# 处理Html页面传回的数据
class MyHTMLEventHandler(adsk.core.HTMLEventHandler):
    def __init__(self):
        super().__init__()
    def notify(self, args):
        try:
            htmlArgs = adsk.core.HTMLEventArgs.cast(args)           
            data = json.loads(htmlArgs.data)
            # _ui.messageBox(str(data))
            lengthdata = data['arguments']['parameter1']
            widthdata = data['arguments']['parameter2']
            design = _app.activeProduct
            lengthparameter = design.userParameters.itemByName('Y')
            widthparameter = design.userParameters.itemByName('X')
            lengthparameter.expression = str(lengthdata)
            # widthparameter.expression = str(widthdata)

        except:
            _ui.messageBox('Failed:\n{}'.format(traceback.format_exc()))
                    
            
# 在点击Edit HenOSV按钮后，显示的页面
class CommandExecuteHandler(adsk.core.CommandEventHandler):
    def __init__(self):
        super().__init__()
    def notify(self, args):
        try:
            inputs = args.command.commandInputs
            cmdInput = inputs.itemById('Function_select')
            if cmdInput.selectedItem.name == 'HenOSV':
                data_service = _app.data
                documents = _app.documents  
                data_file = data_service.findFileById(_HenOSV_ID)
                documents.open(data_file)

                palette = _ui.palettes.itemById(_Palette_ID)
                if not palette:
                    palette = _ui.palettes.add(_Palette_ID, _PALETTE_TITLE, _PALETTE_HTML_FILENAME, True, True, True, 1120, 640, True)
                    palette.isVisible = True
                    
                else:
                    palette.isVisible = True
            elif cmdInput.selectedItem.name == 'Box':
                _ui.messageBox('Box')

            onHTMLEvent = MyHTMLEventHandler()
            palette.incomingFromHTML.add(onHTMLEvent)   
            _handlers.append(onHTMLEvent)
                                           
        except:
            _ui.messageBox('Command executed failed: {}'.format(traceback.format_exc()))


# # 处理Function选择页面的数据
# class VoronoiCommandInputChangedHandler(adsk.core.InputChangedEventHandler):
#     def __init__(self):
#         super().__init__()
#     def notify(self, args):
#         try:
#             cmdInput = adsk.core.CommandInput.cast(args.input)
#             if cmdInput.id == 'Function_select':
#                 if cmdInput.selectedItem.name == 'HenOSV':
#                     _ui.messageBox('HenOSV')
#                     # data_service = _app.data
#                     # documents = _app.documents  
#                     # data_file = data_service.findFileById(_HenOSV_ID)

#                     # documents.open(data_file)
#                 elif cmdInput.selectedItem.name == 'Box':
#                     _ui.messageBox('Box')
#         except:
#             _ui.messageBox('Failed:\n{}'.format(traceback.format_exc()))




# 创建最开始的Function选择页面
class CommandCreatedHandler(adsk.core.CommandCreatedEventHandler):
    def __init__(self):
        super().__init__()
    def notify(self, args):
        try:
            des = adsk.fusion.Design.cast(_app.activeProduct)
            if not des:
                _ui.messageBox('A Fusion design must be active when invoking this command.')
                return

            # Setup the command
            cmd = adsk.core.Command.cast(args.command)

            cmdInputs_ = cmd.commandInputs
            dropdownInput = cmdInputs_.addDropDownCommandInput('Function_select', 'Function', adsk.core.DropDownStyles.LabeledIconDropDownStyle)
            dropdownItems = dropdownInput.listItems
            dropdownItems.add('Select Fuction', True, '')
            dropdownItems.add('HenOSV', False, '')
            dropdownItems.add('Box', False, '')
            cmd.okButtonText = _PALETTE_OK_BUTTON_TEXT


            # Connect to the CommandExecuted event.
            onExecute = CommandExecuteHandler()
            cmd.execute.add(onExecute)
            _handlers.append(onExecute)
            
            # onInputChanged = VoronoiCommandInputChangedHandler()
            # cmd.inputChanged.add(onInputChanged)
            # _handlers.append(onInputChanged)

        except:
            futil.handle_error('CommandCreatedHandler')


def run(context):
    try:
        global _ui, _app
        _app = adsk.core.Application.get()
        _ui  = _app.userInterface
        # Add a command that displays the panel.
        createCmdDef = _ui.commandDefinitions.itemById(_CREATE_CMD_ID)
        if not createCmdDef:
            createCmdDef = _ui.commandDefinitions.addButtonDefinition(_CREATE_CMD_ID, 'HenOSV Generator', 'Generates a HenOSV\n', './/resources')
            # createHenOSVCmdDef.toolClipFilename = './/resources//voronoi-tooltip.png'
            
            # Connect to Command Created event.
            onCommandCreated = CommandCreatedHandler()
            createCmdDef.commandCreated.add(onCommandCreated)
            _handlers.append(onCommandCreated)

        # Add the command to the toolbar.
        panel = _ui.allToolbarPanels.itemById(_SOLID_CREATE_PANEL_ID)
        cntrl = panel.controls.itemById(_CREATE_CMD_ID)
        if not cntrl:
            panel.controls.addCommand(createCmdDef)

    except:
        futil.handle_error('run')


def stop(context):
    try:        
        # Delete the palette created by this add-in.
        palette = _ui.palettes.itemById(_Palette_ID)
        if palette:
            palette.deleteMe()
            
        # Delete controls and associated command definitions created by this add-ins
        panel = _ui.allToolbarPanels.itemById(_SOLID_CREATE_PANEL_ID)
        cmd = panel.controls.itemById(_CREATE_CMD_ID)
        if cmd:
            cmd.deleteMe()
        cmdDef = _ui.commandDefinitions.itemById(_CREATE_CMD_ID)
        if cmdDef:
            cmdDef.deleteMe() 
            
        _ui.messageBox('Stop addin')
    except:
        if _ui:
            _ui.messageBox('Failed:\n{}'.format(traceback.format_exc()))