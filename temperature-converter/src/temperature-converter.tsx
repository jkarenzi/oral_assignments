import React from 'react';
import { FaTemperatureHigh, FaSnowflake } from 'react-icons/fa'; // Icons for temperature symbols

interface TemperatureConverterState {
  celsius: string;
  fahrenheit: string;
}

class TemperatureConverter extends React.Component<{}, TemperatureConverterState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      celsius: '',
      fahrenheit: '',
    };
  }

  handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const celsius = e.target.value;
    if (celsius === '') {
      this.setState({ celsius, fahrenheit: '' });
    } else {
      const fahrenheit = ((parseFloat(celsius) * 9) / 5 + 32).toFixed(2);
      this.setState({ celsius, fahrenheit });
    }
  };

  handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fahrenheit = e.target.value;
    if (fahrenheit === '') {
      this.setState({ celsius: '', fahrenheit });
    } else {
      const celsius = (((parseFloat(fahrenheit) - 32) * 5) / 9).toFixed(2);
      this.setState({ celsius, fahrenheit });
    }
  };

  render() {
    const { celsius, fahrenheit } = this.state;

    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 p-6">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden w-[90%] max-w-lg relative">
          {/* Diagonal Background */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-400 to-blue-400 transform -rotate-6 -translate-x-8 translate-y-5 opacity-30"></div>

          {/* Content */}
          <div className="relative z-10 p-8">
            <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
              Temp Converter
            </h1>

            {/* Temperature Input Section */}
            <div className="flex justify-between gap-6 items-center">
              {/* Celsius Input */}
              <div className="flex-1">
                <label htmlFor="celsius" className="block text-lg text-gray-700 font-semibold mb-2">
                  <FaSnowflake className="inline-block text-blue-500 mr-2" /> Celsius:
                </label>
                <input
                  id="celsius"
                  type="number"
                  value={celsius}
                  onChange={this.handleCelsiusChange}
                  className="w-full p-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-lg text-lg text-gray-900 font-bold placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50"
                  placeholder="0°C"
                />
              </div>

              {/* Fahrenheit Input */}
              <div className="flex-1">
                <label htmlFor="fahrenheit" className="block text-lg text-gray-700 font-semibold mb-2">
                  <FaTemperatureHigh className="inline-block text-yellow-500 mr-2" /> Fahrenheit:
                </label>
                <input
                  id="fahrenheit"
                  type="number"
                  value={fahrenheit}
                  onChange={this.handleFahrenheitChange}
                  className="w-full p-4 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-lg text-lg text-gray-900 font-bold placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50"
                  placeholder="0°F"
                />
              </div>
            </div>

            {/* Additional Info */}
            <div className="text-center mt-8">
              <p className="text-lg text-gray-700 italic">
                Convert temperatures with ease. 
              </p>
              <p className="text-sm text-gray-500">
                Powered by NiftyCalc &copy; 2024.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TemperatureConverter;
