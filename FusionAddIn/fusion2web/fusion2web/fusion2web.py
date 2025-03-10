# Assuming you have not changed the general structure of the template no modification is needed in this file.
from . import commands
from .lib import fusionAddInUtils as futil
import adsk.core, adsk.fusion, adsk.cam, traceback
import json
import os
import webbrowser


_CREATE_CMD_ID = 'createHENOSVCmdId'
_SOLID_CREATE_PANEL_ID = 'SolidCreatePanel'
_PALETTE_OK_BUTTON_TEXT = 'Edit'
_Palette_ID = 'HenOSV_Palette'
_PALETTE_TITLE = 'HenOSV Generator'
_PALETTE_HTML_FILENAME = 'palette.html'
_HenOSV_ID = 'urn:adsk.wipprod:dm.lineage:rWyC_-l1QAGL6SsKUwtU_A'

_handlers = []  # event handlers


# 处理Web事件
class MyOpenedFromURLHandler(adsk.core.WebRequestEventHandler):
    def __init__(self):
        super().__init__()
    def notify(self, args: adsk.core.WebRequestEventArgs):
        # Code to react to the event.
        # _ui.messageBox('OpenedFromURL event')
        # Get the Private info
        privateInfo = args.privateInfo
        _ui.messageBox('Private info: {}'.format(privateInfo))
                    
            
# 点击插件命令，打开web页面
class CommandCreatedHandler(adsk.core.CommandCreatedEventHandler):
    def __init__(self):
        super().__init__()
    def notify(self, args):
        try:
            webbrowser.open("https://bobwu0214.github.io/HenOSV-cp/", 2)

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
        onOpenedFromURL = MyOpenedFromURLHandler()
        _app.openedFromURL.add(onOpenedFromURL)
        _handlers.append(onOpenedFromURL)
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