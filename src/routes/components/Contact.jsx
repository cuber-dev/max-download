

function Contact() {
    const iconLinks = [
        {
            class : 'fa-brands fa-github',
            link : 'https://github.com/cuber-dev'
        },
        {
            class : 'fa-brands fa-facebook',
            link : 'https://www.facebook.com/profile.php?id=100085601172732'
        },
        {
            class : 'fa-brands fa-instagram',
            link : 'https://www.instagram.com/ujtu1k3qkg4as1azzz6ckg0veq0twp/'
        },
        {
            class : 'fa-brands fa-telegram',
            link : 'https://t.me/ujtu1k3qkg4as1azzz6ckg0veq0twp'
        
        }
    ]
    return ( <>
        <section className="contact" id="contact">
            <a href={'/'} className="link logo">MAX</a>
            <div className="divider"></div>
            <ul className="icon-links links">
                {iconLinks.map((item,index) => (
                    <li key={index} ><a target="_blank" href={item.link} className="link"> <i className={item.class} ></i> </a></li>
                ))}
            </ul>
            <p className="copy-right"> <i className="fa fa-copyright" aria-hidden="true"></i> All Rights Reserved 2024-2025.</p>
        </section>
    </> );
} 

export default Contact;