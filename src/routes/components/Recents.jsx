import Download from "./Download";

function Recents({ recents }) {
    return ( <>
         {recents.map((item,index) => (
                    <div key={index} className="result-item">
                        {
                            item.error ? <p className="error"> 
                                <i className="fa fa-warning" aria-hidden="true"></i> {item.error} 
                            </p>
                              : (<> 
                                <div className="thumbnail" >
                                    <a href={item.originalUrl} className="image-link" target="_blank">
                                        <img src={item.thumbnail} alt="thumbnail" className="thumbnail-image" />
                                        <span className="duration"> {item.duration} </span>
                                    </a>
                                </div>
                                <div className="content">
                                    <div className="header">
                                        <p className="title"> {item.title} </p> 
                                    </div>
                                    <div className="download-container">
                                        <Download links={item.videoLinks} item={
                                            {
                                                label : 'Video',
                                                ext : '.mp4'
                                            } 
                                        } />
                                        <Download links={item.audioLinks} item={
                                            {
                                                label : 'Audio',
                                                ext : '.m4a' 
                                            } 
                                        } />
                                    </div>
                                    
                                </div>  
                              
                            </>)
                        }
                    </div>
                ))}
    </> );
}

export default Recents;