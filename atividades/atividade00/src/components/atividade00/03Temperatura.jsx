// Arrow Function
const Temperatura03 = () => {
    
    const celsiusParaFahrenheit = (c) => {
        return ((c/5) * 9) + 32
    }

    const fahrenheitParaCelsius = (f) => {
        return ((f - 32) / 9) * 5
    }

    const kelvinParaFahrenheitCelsius = (k) => {
        return {
            celsius: k - 273,
            fahrenheit: ((k - 273) / 5) * 9 + 32
        }
    }

    return (
        <div>
            <h1>{celsiusParaFahrenheit(40).toFixed(2)}</h1>{/* 104 */}
            <h1>{fahrenheitParaCelsius(230).toFixed(2)}</h1>{/* 110 */}
            <h1>
                Celsius: {kelvinParaFahrenheitCelsius(78).celsius.toFixed(2)},
                fahrenheit: {kelvinParaFahrenheitCelsius(78).fahrenheit.toFixed(2)}
            </h1>
            <h1>{JSON.stringify(kelvinParaFahrenheitCelsius(78))}</h1>{/* -195,15 , -319,27 */}
        </div>
    )
}

export default Temperatura03

