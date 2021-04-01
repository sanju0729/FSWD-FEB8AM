class Sanju {
    Tax = 18;
    render() {
      console.log("Class Sanju - Render Method");
    }
  }
  
  class Message extends Sanju {
    Tax = 16;
    render() {
      console.log("Message Class - Render Method");
    }
  }
  
  let m1 = new Message();
  m1.render();
  console.log(m1.Tax);