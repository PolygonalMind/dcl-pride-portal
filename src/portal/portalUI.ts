export class PortalUI {

    canvas: UICanvas

    background_container: UIContainerRect
    background: UIImage

    buttons_container: UIContainerRect
    button_accept: UIImage
    button_cancel: UIImage

    accept_callback: Function
    cancel_callback: Function

    inputE: any

    private static instanceRef: PortalUI


    private constructor() {
        this.canvas = new UICanvas()
        this.setBackground()
        this.setButtons()
    }

    static instance(): PortalUI { return this.instanceRef || (this.instanceRef = new this()); }

    setEInput(bEnable: boolean) {
        var self = this
        if (!bEnable) this.inputE()
        else {
            this.inputE = Input.instance.subscribe("BUTTON_DOWN", ActionButton.PRIMARY, false, () => {
                log("Accept callback not set")
                self.show(false);
                (self.accept_callback) ? self.accept_callback() : log("Accept callback not set")
            })
        }
    }


    setBackground() {

        this.background_container = new UIContainerRect(this.canvas)
        this.background_container.width = "100%"
        this.background_container.height = "100%"
        this.background_container.positionY = "0%"
        this.background_container.positionX = "0%"
        this.background_container.visible = false
        //this.background_container.color = Color4.Black()

        this.background = new UIImage(this.background_container, new Texture("src/portal/teleportui/Background.png"))
        this.background.sourceWidth = 750
        this.background.sourceHeight = 580
        this.background.width = 750 * 0.7
        this.background.height = 580 * 0.7
        this.background.positionX = 0
        this.background.positionY = 0
        this.background.visible = true
        this.background.vAlign = "center"
        this.background.hAlign = "center"
    }

    setButtons() {
        this.buttons_container = new UIContainerRect(this.background_container)
        this.buttons_container.width = "100%"
        this.buttons_container.height = "100%"
        this.buttons_container.positionY = "0%"
        this.buttons_container.positionX = "0%"
        this.buttons_container.visible = false
        //this.buttons_container.color = Color4.Black()
        this.buttons_container.isPointerBlocker = true

        this.button_accept = new UIImage(this.buttons_container, new Texture("src/portal/teleportui/accept.png"))
        this.button_accept.sourceWidth = 215
        this.button_accept.sourceHeight = 80
        this.button_accept.width = 215 * 0.7
        this.button_accept.height = 80 * 0.7
        this.button_accept.positionX = 0
        this.button_accept.positionY = -80
        this.button_accept.visible = true
        this.button_accept.vAlign = "center"
        this.button_accept.hAlign = "center"
        this.button_accept.isPointerBlocker = true

        this.setAcceptButtonOnClick()

        this.button_cancel = new UIImage(this.buttons_container, new Texture("src/portal/teleportui/cancel.png"))
        this.button_cancel.sourceWidth = 30
        this.button_cancel.sourceHeight = 29
        this.button_cancel.width = 30 * 1
        this.button_cancel.height = 29 * 1
        this.button_cancel.positionX = 215
        this.button_cancel.positionY = 100
        this.button_cancel.visible = true
        this.button_cancel.vAlign = "center"
        this.button_cancel.hAlign = "center"
        this.button_cancel.isPointerBlocker = true

        this.setCancelButtonOnClick()
    }

    /**
     * This function sets the onClick event for a button and subscribes to a button down event to hide a
     * dialog and execute an accept callback function.
     */
    setAcceptButtonOnClick() {
        this.button_accept.onClick = new OnPointerDown(() => {
            this.show(false);
            (this.accept_callback) ? this.accept_callback() : log("Accept callback not set")
        })
    }

    /**
     * This function sets the onClick event for a cancel button and executes a callback function if it
     * exists.
     */
    setCancelButtonOnClick() {
        this.button_cancel.onClick = new OnPointerDown(() => {
            this.show(false);
            (this.cancel_callback) ? this.cancel_callback() : log("Cancel callback not set")
        })
    }

    setAcceptButtonCallback(callback: () => void) {
        this.accept_callback = () => {
            callback()
        }
    }

    setCancelButtonCallback(callback: () => void) {
        this.cancel_callback = () => {
            callback()
        }
    }

    show(bShow: boolean) {
        if (bShow == false) this.setEInput(false)
        if (bShow == true) this.setEInput(true)
        this.background_container.visible = bShow
        this.buttons_container.visible = bShow
    }

    showTeleportToLand(callback: () => void) {
        this.setAcceptButtonCallback(() => {
            callback()
        })
        this.show(true)
    }

}