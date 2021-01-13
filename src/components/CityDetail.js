import React from 'react';
const CityDetail = props => {
    if (props.cityDetail[0]) {
        console.log(props.cityDetail)
        const details = props.cityDetail.map((detail,index) => {
            return (
                <div style = {{border:'1px solid black',margin:'100px'}}>
                    <h1>Result:{index}</h1>
                    <h1>Country:{detail.Country}</h1>
                    <h1>City:{detail.City}</h1>
                    <h1>State:{detail.State}</h1>
                    <h1>Lat:{detail.Lat}</h1>
                    <h1>Long:{detail.Long}</h1>
                    <h1>Estimated Population:{detail.EstimatedPopulation}</h1>

                </div>

            )
        })
        return (
            <div style={{ textAlign: 'center' }}>
                {details}
            </div>
        )
    }
    return null;
}

export default CityDetail;