import React from 'react';
import './Policy.css';

function Policy({childPolicyState}) {
  return (
    <div className="policies__background" onClick={() => childPolicyState(false)}>
        <div className="policies-container">
            <i className="fas fa-times-circle icon--exit" onClick={() => childPolicyState(false)}></i> 
            <div className="container__policies">
                <div className="policies__header"><h2>CHÍNH SÁCH VÀ QUY ĐỊNH</h2></div>
                <div className="policies__content">
                    <h3>1. Lorem insum</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Elementum pretium nibh at vitae ac leo. Consectetur massa mi diam in. Enim donec lacus, elit, elit, vitae vel pretium vitae. 
                        incidunt euismod in integer eu mauris viverra tellus nisi, in. 
                        Imperdiet nisi, sit nec justo aenean. Vivamus velit a amet in ut. 
                        Vulputate pretium vivamus et et neque, lectus diam.</p>
                    <p>Mi quam tellus libero, imperdiet sollicitudin vulputate libero velit quis. 
                        Tristique feugiat non non pulvinar condimentum. 
                        Pharetra viverra molestie quis platea malesuada egestas sit volutpat eros. 
                        Enim diam id elementum sit sapien. 
                        Maecenas ullamcorper sit nullam quis feugiat augue sit feugiat enim.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Elementum pretium nibh at vitae ac leo. Consectetur massa mi diam in. Enim donec lacus, elit, elit, vitae vel pretium vitae. 
                        incidunt euismod in integer eu mauris viverra tellus nisi, in. 
                        Imperdiet nisi, sit nec justo aenean. Vivamus velit a amet in ut. 
                        Vulputate pretium vivamus et et neque, lectus diam.</p>
                    <h3>2. Lorem insum</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sapien orci, feugiat condimentum amet vitae. 
                        Tellus habitant iaculis sit lorem volutpat id lorem. 
                        Mauris auctor odio pellentesque libero scelerisque arcu, sit. 
                        Sapien eu at adipiscing faucibus ipsum, malesuada amet at fringilla.</p>
                    <p>Nulla amet, tristique libero, sagittis orci penatibus. 
                        Varius amet odio commodo risus lacus ac, quis. 
                        Semper neque adipiscing sed arcu ornare eleifend eu non, sagittis. 
                        Volutpat lacus, enim risus nulla dignissim id.  
                        Etiam erat dapibus vitae dictum quis.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Elementum pretium nibh at vitae ac leo. Consectetur massa mi diam in. Enim donec lacus, elit, elit, vitae vel pretium vitae. 
                        incidunt euismod in integer eu mauris viverra tellus nisi, in. 
                        Imperdiet nisi, sit nec justo aenean. Vivamus velit a amet in ut. 
                        Vulputate pretium vivamus et et neque, lectus diam.</p>
                    <h3>3. Lorem insum</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sapien orci, feugiat condimentum amet vitae. 
                        Tellus habitant iaculis sit lorem volutpat id lorem. 
                        Mauris auctor odio pellentesque libero scelerisque arcu, sit. 
                        Sapien eu at adipiscing faucibus ipsum, malesuada amet at fringilla.</p>
                    <p>Mi quam tellus libero, imperdiet sollicitudin vulputate libero velit quis. 
                        Tristique feugiat non non pulvinar condimentum. 
                        Pharetra viverra molestie quis platea malesuada egestas sit volutpat eros. 
                        Enim diam id elementum sit sapien. 
                        Maecenas ullamcorper sit nullam quis feugiat augue sit feugiat enim.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Elementum pretium nibh at vitae ac leo. Consectetur massa mi diam in. Enim donec lacus, elit, elit, vitae vel pretium vitae. 
                        incidunt euismod in integer eu mauris viverra tellus nisi, in. 
                        Imperdiet nisi, sit nec justo aenean. Vivamus velit a amet in ut. 
                        Vulputate pretium vivamus et et neque, lectus diam.</p>
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default Policy