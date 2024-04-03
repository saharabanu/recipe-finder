import { FormInput, Recipe, SliderItem } from "../types/globaltypes";

// banner data
export const sliderData: SliderItem[] = [
    {
      image: "https://braise.qodeinteractive.com/wp-content/uploads/2021/09/home-2-recipe-list-iimg-1.jpg",
      title: "Avocado bacon sandwich with lettuce",
    },
    {
      image: "https://braise.qodeinteractive.com/wp-content/uploads/2021/09/home-2-recipe-list-iimg-1.jpg",
      title: "Looking way ahead allows you to imagine anything",
    },
    {
      image:"https://braise.qodeinteractive.com/wp-content/uploads/2021/09/home-2-recipe-list-iimg-1.jpg",
      title: "Looking way ahead allows you to imagine anything",
    },
  ];
  

export const data: Recipe[]= [
    {
        id:1,
        img:"https://braise.qodeinteractive.com/wp-content/uploads/2021/09/main-home-recipe-list-img-2.jpg",
        title:"Avocado bacon sandwich with lettuce",
        desc:"Lorem ipsum dolor sit amet, consectetur adipicibe elit, sed do eiusmod tempor inci didunt ut labore e dolore magnna ad aliquam. Ut enim",
        category:"MAIN DISH",
    },
    {
        id:2,
        img:"https://braise.qodeinteractive.com/wp-content/uploads/2021/09/main-home-recipe-list-img-11-429x486.jpg",
        title:"Almonds, passion fruit and quinoa salad",
        desc:"Lorem ipsum dolor sit amet, consectetur adipicibe elit, sed do eiusmod tempor inci didunt ut labore e dolore magnna ad aliquam. Ut enim",
        category:"CEREALS",
    },
    {
        id:3,
        img:"https://braise.qodeinteractive.com/wp-content/uploads/2021/09/home-5-recipe-list-img-3-429x486.jpg",
        title:"Tomato sandwich with hummus consectetur",
        desc:"Lorem ipsum dolor sit amet, consectetur adipicibe elit, sed do eiusmod tempor inci didunt ut labore e dolore magnna ad aliquam. Ut enim",
        category:"RAW FOOD",
    },
    {
        id:4,
        img:"https://braise.qodeinteractive.com/wp-content/uploads/2021/09/main-home-recipe-list-img-7-429x486.jpg",
        title:"Grilled avocado tuna healthy mixed salad",
        desc:"Lorem ipsum dolor sit amet, consectetur adipicibe elit, sed do eiusmod tempor inci didunt ut labore e dolore magnna ad aliquam. Ut enim",
        category:"MEAT",
    },
    {
        id:5,
        img:"https://braise.qodeinteractive.com/wp-content/uploads/2021/09/main-home-recipe-list-img-5-429x486.jpg",
        title:"Mushroom cream soup with vegetables,   pepper",
        desc:"Lorem ipsum dolor sit amet, consectetur adipicibe elit, sed do eiusmod tempor inci didunt ut labore e dolore magnna ad aliquam. Ut enim",
        category:"SNACKS",
    },
    {
        id:6,
        img:"https://braise.qodeinteractive.com/wp-content/uploads/2021/09/home-2-recipe-list-2-img-2-429x486.jpg",
        title:"Healthy blueberry cereal consectetur",
        desc:"Lorem ipsum dolor sit amet, consectetur adipicibe elit, sed do eiusmod tempor inci didunt ut labore e dolore magnna ad aliquam. Ut enim",
        category:"DESSERTS",
    },
    {
        id:7,
        img:"https://braise.qodeinteractive.com/wp-content/uploads/2021/09/main-home-recipe-list-img-2.jpg",
        title:"Avocado bacon sandwich with lettuce",
        desc:"Lorem ipsum dolor sit amet, consectetur adipicibe elit, sed do eiusmod tempor inci didunt ut labore e dolore magnna ad aliquam. Ut enim",
        category:"DESSERTS",
    },
    {
        id:8,
        img:"https://braise.qodeinteractive.com/wp-content/uploads/2021/09/main-home-recipe-list-img-2.jpg",
        title:"Avocado bacon sandwich with lettuce",
        desc:"Lorem ipsum dolor sit amet, consectetur adipicibe elit, sed do eiusmod tempor inci didunt ut labore e dolore magnna ad aliquam. Ut enim",
        category:"SNACKS",
    },
    {
        id:9,
        img:"https://braise.qodeinteractive.com/wp-content/uploads/2021/09/main-home-recipe-list-img-2.jpg",
        title:"Avocado bacon sandwich with lettuce",
        desc:"Lorem ipsum dolor sit amet, consectetur adipicibe elit, sed do eiusmod tempor inci didunt ut labore e dolore magnna ad aliquam. Ut enim",
        category:"RAW FOOD",
    },
    {
        id:10,
        img:"https://braise.qodeinteractive.com/wp-content/uploads/2021/09/main-home-recipe-list-img-2.jpg",
        title:"Avocado bacon sandwich with lettuce",
        desc:"Lorem ipsum dolor sit amet, consectetur adipicibe elit, sed do eiusmod tempor inci didunt ut labore e dolore magnna ad aliquam. Ut enim",
        category:"CEREALS",
    },

]

export const inputFields: FormInput[] = [
    {
      type: "text",
      name: "from_name",
      placeholder: "Your Name*",
      required: true,
    },
    {
      type: "email",
      name: "from_email",
      placeholder: "Your Email*",
      required: true,
    },
    {
      type: "text",
      name: "from_con",
      placeholder: "Your Contact Number*",
      pattern: "^01\\d{9}$",
      title: "Mobile Number must be 11 digits like 01742561023",
      required: true,
    },
    {
      type: "textarea",
      name: "message",
      placeholder: "Your Message*",
      required: true,
    },
  ];
  