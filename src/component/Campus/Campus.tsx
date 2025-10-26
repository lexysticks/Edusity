import './Campus.css'
import graduatepic2 from '../../assets/graduate2.avif'
import graduatepic3 from '../../assets/graduate3.avif'
import graduatepic from '../../assets/graduate1.avif';



function Campus(){
    return(
        <div>
            <div className="campus_main">
                <div className="campus">
                    <div className="our">
                    <h4>Gallery</h4>
                    <h1>Campus photo</h1>
                    
                </div>

                <div className="campus_card">
                    <div className="card-1">
                        <img className='img' src={graduatepic} alt="" />

                    </div>
                    <div className="card-2">
                        <img className='img' src={graduatepic2} alt="" />

                    </div>
                    <div className="card-3">
                        <img  className='img' src={graduatepic3} alt="" />

                    </div>
                    <div className="card-3">
                        <img  className='img' src={graduatepic3} alt="" />

                    </div>
                    
                
+
                    </div>
                    <div>
                        <button className='ctnn'>See More</button>
                    </div>
                
                </div>
              
            </div>
            

            
        </div>

    )
}

export default Campus