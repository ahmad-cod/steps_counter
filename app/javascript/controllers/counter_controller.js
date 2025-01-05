import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="counter"
export default class extends Controller {
  static targets = ["count", "input"]
  static values = { count: Number }

  connect() {
    if (!this.hasCountValue) {
      this.countValue = 0
    }
    this.updateDisplay()
  }

  increment() {
    this.countValue++
    this.updateDisplay()
  }

  decrement() {
    if (this.countValue > 0) {
        this.countValue--
        this.updateDisplay()
        
      }
  }

  updateDisplay() {
    this.countTarget.textContent = this.countValue
  }

  reset() {
    this.countValue = 0
    this.updateDisplay()
  }
}

