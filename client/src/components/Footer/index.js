import React from 'react';



function Footer() {
    return (<>
        <footer>
            <div className="footer_content text-center">
                <p>© 2019 Yuwen Li & Yuyang Zhang</p>
                <br/>
                {/* <div className="footer_link">
                <a href="https://dribbble.com/Leeven"><i className="fas fa-basketball-ball"></i></a>
                <a href="https://github.com/muzlee1113"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/yuwen-li-176a43105/"><i className="fab fa-linkedin"></i></a>
                <a href="https://medium.com/@muzlee1113"><i className="fab fa-medium"></i></a>
                <a id="resume" href="https://drive.google.com/file/d/1As4-SrNYvTY9cL-v37R0IOLrn9pBt2rm/view"><img id="resumeBtn" src={process.env.PUBLIC_URL + "/images/resumeBtn.png"} /></a>
                </div> */}
            </div>
        </footer>
        </>)
}

export default Footer;

