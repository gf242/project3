const Blogs = () => {
  return (
  
  <>
  <div className="page">
  
  
  <h1>Blog</h1>
  
  <img className="image" src="data:image/png;base64,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">
  </img>
  <p className="header">Hello and welcome to the Quirky Quote Website. Here, we are all about gaining insight from those who have gone before us.
  <br></br>
  We want to enrich your life, add positivity to the world, and hopefully brighten your day. Since 2022, we have believed in the age old saying, 'A quote a 
  day keeps the doctor away'. 
  <br></br>
  Just think where we'd be without the help of scholars such as Davinci, Newton, and Moroni. </p>
  
  <p>
  Follow the links below and read about some of these amazing scholars.
  <br></br>
  <a href="https://en.wikipedia.org/wiki/Leonardo_da_Vinci">da Vinci</a>
  <br></br>
  <a href="https://en.wikipedia.org/wiki/Isaac_Newton">Newton</a>
  <br></br>
  <a href="https://www.churchofjesuschrist.org/?lang=eng">Moroni</a>
  </p>
  
  <p className="footer">
        <a  href="https://github.com/gf242/project3" >Project 3 Github</a>
        </p>
  
  
  
  
  
  
  
  
  
  </div>
  
  
  </>
  )
};

export default Blogs;