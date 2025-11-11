import React, { useState } from 'react';
export const Hook = () => {

    const [countR, setCountR] = useState(0);
    const [countY, setCountY] = useState(0);
    const [countG, setCountG] = useState(0);
    const [colorR, setColorR] = useState(" rgba(255, 13, 13, 1) 0%");
    const [colorY, setColorY] = useState("yellow");
    const [colorG, setColorG] = useState("green");
    const [dimensionR, setDimensionR] = useState("200px");
    const [dimensionY, setDimensionY] = useState("200px");
    const [dimensionG, setDimensionG] = useState("200px");

    const redLight = () => {


        if (countR === 0) {
            setCountR(1)
            setCountY(0)
            setCountG(0)

            setColorR("radial-gradient(circle, rgba(251, 255, 210, 1) 20%, rgba(229, 255, 0, 1) 50%, rgba(0, 0, 0, 0) 70%)")
            setColorY("yellow")
            setColorG("green")

            setDimensionR("250px")
            setDimensionY("200px")
            setDimensionG("200px")


        }
        else {
            setCountR(0)
            setCountY(0)
            setCountG(0)

            setColorR("red")
            setColorY("yellow")
            setColorG("green")
            
            setDimensionR("200px")
            setDimensionY("200px")
            setDimensionG("200px")

        }

    }

    const yellowLight = () => {


        if (countY === 0) {
            setCountR(0)
            setCountY(1)
            setCountG(0)
            
            setColorR("red")
            setColorY("radial-gradient(circle, rgba(251, 255, 210, 1) 20%, rgba(229, 255, 0, 1) 50%, rgba(0, 0, 0, 0) 70%)")
            setColorG("green")

            setDimensionR("200px")
            setDimensionY("250px")
            setDimensionG("200px")
        }
        else {

            setCountR(0)
            setCountY(0)
            setCountG(0)

            setColorR("red")
            setColorY("yellow")
            setColorG("green")

            setDimensionR("200px")
            setDimensionY("200px")
            setDimensionG("200px")
        }

    }

    const greenLight = () => {


        if (countG === 0) {
            setCountR(0)
            setCountY(0)
            setCountG(1)
            
            setColorR("red")
            setColorY("yellow")
            setColorG("radial-gradient(circle, rgba(251, 255, 210, 1) 20%, rgba(229, 255, 0, 1) 50%, rgba(0, 0, 0, 0) 70%)")
            

            setDimensionR("200px")
            setDimensionY("200px")
            setDimensionG("250px")
        }
        else {

            setCountR(0)
            setCountY(0)
            setCountG(0)

            setColorG("green")
            setDimensionR("200px")
            setDimensionY("200px")
            setDimensionG("200px")
        }

    }


    return (

        <div style={{ position: "absolute", marginLeft: "40%", marginrRght: "50%", top: "100px", height: "700px", width: "300px", background: "black", objectFit: "cover", borderRadius: "135px" }}>
            <div style= {{position: "absolute", width: "80px", height: "500px", background: "black",top: "-200px", marginLeft: "35%", marginRight: "50%"}}></div>
            <div style={{position: "relative", left: "150px", top: "135px"  }}>

                <div style={{ transform: "translate(-50%, -50%)", background: colorR, width: dimensionR, aspectRatio: "1/1", borderRadius: "50%", marginTop: "0px", position: "absolute" }} onClick={redLight} >

                </div>

                <div style={{ transform: "translate(-50%, -50%)", background: colorY, width: dimensionY, aspectRatio: "1/1", borderRadius: "50%", marginTop: "210px", position: "absolute" }} onClick={yellowLight} >

                </div>

                <div style={{ transform: "translate(-50%, -50%)", background: colorG, width: dimensionG, aspectRatio: "1/1", borderRadius: "50%", marginTop: "420px", position: "absolute" }} onClick={greenLight} >

                </div>

            </div>
        </div>

    )
}




