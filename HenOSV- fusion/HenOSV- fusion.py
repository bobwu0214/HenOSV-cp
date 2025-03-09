import adsk.core, adsk.fusion, json

def run(context):
    ui = None
    try:
        app = adsk.core.Application.get()
        ui = app.userInterface
        design = app.activeProduct

        # 获取传输的参数
        privateInfo = app.commandLineArguments.itemByName('privateInfo')
        if not privateInfo:
            ui.messageBox("未接收到参数")
            return

        # 解析 JSON 数据
        params = json.loads(privateInfo)
        length = float(params.get("length", 100))
        width = float(params.get("width", 50))
        thickness = float(params.get("thickness", 15))
        wheelDistance = float(params.get("wheelDistance", 50))
        wheelDiameter = float(params.get("wheelDiameter", 40))
        wheelThickness = float(params.get("wheelThickness", 15))

        # 获取当前设计的参数
        userParams = design.userParameters
        userParams.itemByName('length').value = length
        userParams.itemByName('width').value = width
        userParams.itemByName('thickness').value = thickness
        userParams.itemByName('wheelDistance').value = wheelDistance
        userParams.itemByName('wheelDiameter').value = wheelDiameter
        userParams.itemByName('wheelThickness').value = wheelThickness

        ui.messageBox("Fusion 360 设计已更新！")

    except Exception as e:
        if ui:
            ui.messageBox(f'发生错误: {str(e)}')
