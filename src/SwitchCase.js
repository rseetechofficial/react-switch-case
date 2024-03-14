import React, { useState } from "react";

const SwitchCase = () => {

    const [selectedOption, setSelectedOption] = useState('option1');

    const handleOptionChange = (newOption) => {
        setSelectedOption(newOption);
    };

    return (

        <div>
            <h1>Switch Case in React</h1>

            <br />
            <br />

            <h3>Selected Option : {selectedOption}</h3>

            <br />
            <br />

            <div>
                <label>
                    <input 
                    type="radio" 
                    value="option1" 
                    checked={selectedOption === "option1"}
                    onChange={() => handleOptionChange('option1')} />
                    Option 1
                </label>

                <label>
                    <input 
                    type="radio" 
                    value="option2" 
                    checked={selectedOption === "option2"}
                    onChange={() => handleOptionChange('option2')} />
                    Option 2
                </label>

                <label>
                    <input 
                    type="radio" 
                    value="option3" 
                    checked={selectedOption === "option3"}
                    onChange={() => handleOptionChange('option3')} />
                    Option 3
                </label>
            </div>

            <br />
            <br />
            <div>
                {(() => {
                    switch(selectedOption) {
                        case 'option1':
                            return <h4>Selected Switch option 1</h4>;

                        case 'option2':
                            return <h4>Selected Switch option 2</h4>;
                                
                        case 'option3':
                            return <h4>Selected Switch option 3</h4>;

                        default:
                            return null;
                    }
                })()}
            </div>
        </div>
    )
};

export default SwitchCase;