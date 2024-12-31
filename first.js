document.body.addEventListener("click", (event)=>{
  
    const circle = document.createElement('div');
    circle.className = 'circle';
    const newYearWishes = [
        "<img src='./IMG5.jpg' style='width:80px; height:80px; border-radius:50%'>",
        "Wishing you a year filled with love and happiness!",
        "May this year bring you endless joy and success.",
        "<img src='./IMG3.jpg' style='width:80px; height:80px; border-radius:50%'>",
        "Happy New Year! May all your dreams come true.",
        "<img src='./IMG7.jpg' style='width:80px; height:80px; border-radius:50%'>",
        "Wishing you a prosperous and joyful 2024!",
        "<img src='./IMG1.jpg' style='width:80px; height:80px; border-radius:50%'>",
        "May this year be your best one yet!",
        "<img src='./IMG8.jpg' style='width:80px; height:80px; border-radius:50%'>",
        "Cheers to a new year and another chance to get it right!",
        "<img src='./IMG4.jpg' style='width:80px; height:80px; border-radius:50%'>",
        "Wishing you health, wealth, and love in the New Year.",
        "<img src='./IMG2.jpg' style='width:80px; height:80px; border-radius:50%'>",
        "May 2024 be full of blessings and joy for you and your loved ones.",
        "<img src='./IMG6.jpg' style='width:80px; height:80px; border-radius:50%'>",
        "Happy New Year! Here's to fresh starts and new beginnings.",
        "May your year be as bright as your spirit!",
        "Wishing you peace, love, and laughter in the coming year.",
        "Here's to a year filled with wonderful memories and adventures!",
        "<img src='./IMG2.jpg' style='width:80px; height:80px; border-radius:50%'>",
        "<img src='./IMG3.jpg' style='width:80px; height:80px; border-radius:50%'>"
      ];
      
      
    circle.innerHTML=newYearWishes[Math.floor(Math.random()*newYearWishes.length)];
    
    const x = event.clientX;
    const y = event.clientY;
  
    circle.style.left = `${x-50}px`
    circle.style.top= `${y-50}px`
      
    const background = document.querySelector('body');
    let index1 = Math.floor(Math.random()*256);
    let index2 = Math.floor(Math.random()*256);
    let index3 = Math.floor(Math.random()*256);
    let index4 = Math.random();
    background.style.backgroundColor = `rgba(${index1},${index2},${index3},${index4})` 
      
    let index5 = Math.floor(Math.random()*256);
    let index6 = Math.floor(Math.random()*256);
    let index7 = Math.floor(Math.random()*256);
    let index8 = Math.random();
    circle.style.backgroundColor = `rgba(${index5},${index6},${index7},${index8})`
    document.body.appendChild(circle);
  
    setTimeout(()=>{
      circle.remove();
    } ,5000)
  })
  