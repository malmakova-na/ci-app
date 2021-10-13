import './Footer.css';
export const Footer = ({copyRight, links}) => {
    return <footer className="footer">
                <div className="footerLinks">
                    {links.map(link => <a href="#">{link}</a>)}
                </div>
                <div className="copy">&copy; 2020, {copyRight}</div> 
            </footer>
};
/*
<a href="#">Support</a>
                    <a href="#">Learning</a>
                    <a href="#">Русская Версия</a>
*/