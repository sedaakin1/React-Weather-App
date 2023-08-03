import React from 'react';

const City = ({city}) => {
    console.log(city);    
    return <div>
        <div className="w-[500px] rounded-md shadow mx-auto">
         <h1 className="text-3xl font-semibold">{city.name}</h1>
         <h1 className="text-5xl font-extrabold">{city.main.temp}</h1>
         <h1 className="text-2xl font-semibold">{city.weather[0].main}</h1>
        </div>
    </div>;
};

export default City;