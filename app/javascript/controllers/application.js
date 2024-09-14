import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

//import checkbox_select_all stimulus controller
import CheckboxSelectAllController from "./checkbox_selectall_controller"
application.register("checkbox-select-all", CheckboxSelectAllController)

// console.log("Hello, Stimulus!!!!")

export { application }
