const prinBox = document.querySelector("#principal")
const interBox = document.querySelector("#interest")
const timesBox = document.querySelector("#times")
const yearsBox = document.querySelector("#years")
const endAmount = document.querySelector("#final")

function computeCompoundInterest() {
  const principal = prinBox.value
  const interestRate = interBox.value
  const timesCompounded = timesBox.value
  const years = yearsBox.value
  const finalVal = principal * ((1 + interestRate / timesCompounded) ** (timesCompounded * years))
  endAmount.textContent = finalVal
}

prinBox.addEventListener('input', computeCompoundInterest)
interBox.addEventListener('input', computeCompoundInterest)
timesBox.addEventListener('input', computeCompoundInterest)
yearsBox.addEventListener('input', computeCompoundInterest)
