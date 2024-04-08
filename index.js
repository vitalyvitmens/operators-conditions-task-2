document
  .getElementById('lengthForm')
  .addEventListener('submit', function (event) {
    event.preventDefault()

    const unitCode = parseInt(document.getElementById('unitCode').value)
    const length = parseFloat(document.getElementById('length').value)

    if (!isNaN(unitCode) && length > 0) {
      const meters = convertToMeters(unitCode, length)
      const unitName = getUnitName(unitCode)
      document.getElementById(
        'result'
      ).innerHTML = `Исходная длина: ${length} ${unitName}<br>Длина в метрах: ${meters.toFixed(
        3
      )} м`
    } else {
      document.getElementById('result').textContent =
        'Пожалуйста, введите корректные значения.'
    }
  })

function convertToMeters(unitCode, length) {
  switch (unitCode) {
    case 1:
      return (length * 2.12) / 1000
    case 2:
      return (length * 2.54) / 100
    case 3:
      return (length * 30.48) / 100
    case 4:
      return length * 0.9144
    case 5:
      return length * 1.609 * 1000
    default:
      return 0
  }
}

function getUnitName(unitCode) {
  switch (unitCode) {
    case 1:
      return 'линий'
    case 2:
      return 'дюймов'
    case 3:
      return 'футов'
    case 4:
      return 'ярдов'
    case 5:
      return 'миль'
    default:
      return ''
  }
}
