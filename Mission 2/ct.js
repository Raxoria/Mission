  let start = Date.now(); // remember start time

  let timer = setInterval(animation, 20);

  // as timePassed goes from 0 to 2000
  // left gets values from 0px to 400px

  let jalan = true;
  
  function animation(){
      // how much time passed from the start?
      let timePassed = Date.now() - start;
    
      if (timePassed >= 15000) {
        // clearInterval(timer); // finish the animation after 2 seconds
        start = Date.now();
        return;
      }
    
      // draw the animation at the moment timePassed
      draw(timePassed);
  }

  document.addEventListener('keypress', function(){
    if (jalan == true){
      clearInterval(timer);
      jalan=false;
    }
    else if (jalan == false){
      timer = setInterval(animation,20);
      jalan=true;
    }
  }); 

  function draw(timePassed) {
    // earth.style.opacity = timePassed/5000;
    earth.style.left = -500 + (timePassed / 5) + 'px';
    moon.style.left =  -500 +(timePassed / 5) + 'px';
    sun.style.right = -500 + (timePassed / 5) + 'px';
    saturn.style.right = -500 + (timePassed / 5) + 'px';
    jupiter.style.right = -500 + (timePassed / 5) + 'px';
  }

  async function init () {
    const node = document.querySelector("#type-text")
    
    await sleep(1000)
    node.innerText = ""
    await node.type('Hello, ')
    console.log("Test")
    while (true) {
      await node.type('CodePen!')
      await sleep(2000)
      await node.delete('CodePen!')
      await node.type('World!')
      await sleep(2000)
      await node.delete('World!')
    }
  }
  
  
  // Source code 🚩
  
  const sleep = time => new Promise(resolve => setTimeout(resolve, time))
  
  class TypeAsync extends HTMLSpanElement {
    get typeInterval () {
      const randomMs = 100 * Math.random()
      return randomMs < 50 ? 10 : randomMs
    }
    
    async type (text) {
      for (let character of text) {
        this.innerText += character
        await sleep(this.typeInterval)
      }
    }
    
    async delete (text) {
      for (let character of text) {
        this.innerText = this.innerText.slice(0, this.innerText.length -1)
        await sleep(this.typeInterval)
      }
    }
  }
  customElements.define('type-async', TypeAsync, { extends: 'span' })
  
  init()
 
