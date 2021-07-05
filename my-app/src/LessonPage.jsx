import React from 'react'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';



const LessonPage = () => {
    return (
        <>
            <html lang="en">

                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Screen</title>
                </head>
                <body>

                    <div className="container-fluid">
                    </div>


                    <div className="lbody">
                        <div className="back">
                            <ArrowLeftIcon />
                        </div>
                        <div className="span1">
                            <span><h4>Videos</h4></span>
                        </div>


                        <div>
                            <form>
                                <div className="form">
                                    <input type="url" id="url" placeholder="Insert Url Here" /><br />
                                    <div className="span2">
                                        <span><h4>OR</h4></span>
                                    </div>
                                    <input type="file" id="file" />
                                </div>
                            </form>
                        </div>
                    </div>

                    
                    <div className="doc">
                        <span className="s1"><strong>Upload File</strong></span>
                    </div>
                </body>

            </html>
        </>
    )
}

export default LessonPage;