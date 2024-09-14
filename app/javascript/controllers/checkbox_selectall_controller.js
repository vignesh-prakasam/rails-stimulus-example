import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="checkbox-selectall"
export default class extends Controller {
  static targets = ["interest", "selectall"]
  connect() {
    // console.log("Hello, Stimulus!!!!!");
  }
  selectAll() {
    let checked = this.selectallTarget.checked;
    this.interestTargets.forEach((interest) => {
      interest.checked = checked;
    });
  }
}
