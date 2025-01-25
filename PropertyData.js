import a1 from '/public/assets/properties/a1.jpg'
import a2 from '/public/assets/properties/a2.jpg'
import a3 from '/public/assets/properties/a3.jpg'
import a4 from '/public/assets/properties/a4.jpg'
import b1 from '/public/assets/properties/b1.jpg'
import b2 from '/public/assets/properties/b2.jpg'
import b3 from '/public/assets/properties/b3.jpg'
import c1 from '/public/assets/properties/c1.jpg'
import c2 from '/public/assets/properties/c2.jpg'
import c3 from '/public/assets/properties/c3.jpg'
import c4 from '/public/assets/properties/c4.jpg'
import d1 from '/public/assets/properties/d1.jpg'
import d2 from '/public/assets/properties/d2.jpg'
import d3 from '/public/assets/properties/d3.jpg'
import e1 from '/public/assets/properties/e1.jpg'
import e2 from '/public/assets/properties/e2.jpg'
import e3 from '/public/assets/properties/e3.jpg'
import e4 from '/public/assets/properties/e4.jpg'
import f1 from '/public/assets/properties/f1.jpg'
import f2 from '/public/assets/properties/f2.jpg'
import f3 from '/public/assets/properties/f3.jpg'
import g1 from '/public/assets/properties/g1.jpg'
import g2 from '/public/assets/properties/g2.jpg'
import g3 from '/public/assets/properties/g3.jpg'
import g4 from '/public/assets/properties/g4.jpg'
import h1 from '/public/assets/properties/h1.jpg'
import h2 from '/public/assets/properties/h2.jpg'
import h3 from '/public/assets/properties/h3.jpg'
import i1 from '/public/assets/properties/i1.jpg'
import i2 from '/public/assets/properties/i2.jpg'
import i3 from '/public/assets/properties/i3.jpg'
import j1 from '/public/assets/properties/j1.jpg'
import j2 from '/public/assets/properties/j2.jpg'
import j3 from '/public/assets/properties/j3.jpg'
import user1 from '/public/assets/userimg/user1.jpg'
import user2 from '/public/assets/userimg/user2.jpg'
import user3 from '/public/assets/userimg/user3.png'
import user4 from '/public/assets/userimg/user4.png'
import user5 from '/public/assets/userimg/user5.png'

export const listData = [
    {
      id: 1,
      agent: "John Doe",
      agentImg: user1,
      title: "Boston Apartment",
      description: "This is a demo real estate project! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quo repellendus est id placeat doloribus asperiores, pariatur rerum quod corporis eum ad culpa quasi, nemo animi assumenda expedita, natus error. Eum ratione quas rem similique eveniet fuga culpa ullam doloremque!",
      images: [a1, a2, a3, a4],
      date: "2025-02-10",
      bedroom: 2,
      bathroom: 1,
      type: "Rent",
      ondemand: false,
      price: 3000,
      location: "456 Park Avenue, London.",
      latitude: 51.5074,
      longitude: -0.1278,
    },
    {
      id: 2,
      agent: "Jane Benneth",
      agentImg: user2,
      title: "Modern Loft",
      description: "This is a demo real estate project! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quo repellendus est id placeat doloribus asperiores, pariatur rerum quod corporis eum ad culpa quasi, nemo animi assumenda expedita, natus error. Eum ratione quas rem similique eveniet fuga culpa ullam doloremque!",
      images: [b1, b2, b3, b2],
      date: "2025-02-12",
      bedroom: 3,
      bathroom: 2,
      type: "Sale",
      ondemand: true,
      price: 2500000,
      location: "789 Oxford Street, London.",
      latitude: 52.4862,
      longitude: -1.8904,
    },
    {
      id: 3,
      agent: "Isaac Ray",
      agentImg: user3,
      title: "Private Duplex",
      description: "This is a demo real estate project! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quo repellendus est id placeat doloribus asperiores, pariatur rerum quod corporis eum ad culpa quasi, nemo animi assumenda expedita, natus error. Eum ratione quas rem similique eveniet fuga culpa ullam doloremque!",
      images: [c1, c2, c3, c4],
      date: "2025-02-20",
      bedroom: 1,
      bathroom: 1,
      type: "Sale",
      ondemand: true,
      price: 5000,
      location: "101 Baker Street, London.",
      latitude: 53.4808,
      longitude: -2.2426,
    },
    {
      id: 4,
      agent: "Sarah Mitchell",
      agentImg: user4,
      title: "Cabin Getaway",
      description: "This is a demo real estate project! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quo repellendus est id placeat doloribus asperiores, pariatur rerum quod corporis eum ad culpa quasi, nemo animi assumenda expedita, natus error. Eum ratione quas rem similique eveniet fuga culpa ullam doloremque!",
      images: [d1, d2, d3, d2],
      date: "2025-02-14",
      bedroom: 2,
      bathroom: 1,
      type: "Rent",
      ondemand: true,
      price: 2000,
      location: "234 Kingsway, London.",
      latitude: 53.8008,
      longitude: -1.5491,
    },
    {
      id: 5,
      agent: "Kevin Woo",
      agentImg: user5,
      title: "Victoria Apartment",
      description: "This is a demo real estate project! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quo repellendus est id placeat doloribus asperiores, pariatur rerum quod corporis eum ad culpa quasi, nemo animi assumenda expedita, natus error. Eum ratione quas rem similique eveniet fuga culpa ullam doloremque!",
      images: [e1, e2, e3, e4],
      date: "2025-03-26",
      bedroom: 3,
      bathroom: 2,
      type: "Rent",
      ondemand: true,
      price: 2500,
      location: "567 Victoria Road, London.",
      latitude: 53.4084,
      longitude: -2.9916,
    },
    {
      id: 6,
      agent: "Isaac Ray",
      agentImg: user3,
      title: "Private Beach House",
      description: "This is a demo real estate project! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quo repellendus est id placeat doloribus asperiores, pariatur rerum quod corporis eum ad culpa quasi, nemo animi assumenda expedita, natus error. Eum ratione quas rem similique eveniet fuga culpa ullam doloremque!",
      images: [f1, f2, f3, f2],
      date: "2025-04-07",
      bedroom: 1,
      bathroom: 1,
      type: "Sale",
      ondemand: true,
      price: 470000,
      location: "890 Regent Street, London.",
      latitude: 54.9783,
      longitude: -1.6174,
    },
    {
      id: 7,
      agent: "Jane Benneth",
      agentImg: user2,
      title: "Cabin Duplex House",
      description: "This is a demo real estate project! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quo repellendus est id placeat doloribus asperiores, pariatur rerum quod corporis eum ad culpa quasi, nemo animi assumenda expedita, natus error. Eum ratione quas rem similique eveniet fuga culpa ullam doloremque!",
      images: [g1, g2, g3, g4],
      date: "2025-04-27",
      bedroom: 2,
      bathroom: 1,
      type: "Rent",
      ondemand: false,
      price: 1000,
      location: "112 Piccadilly, London.",
      latitude: 53.3811,
      longitude: -1.4701,
    },
    {
      id: 8,
      agent: "John Doe",
      agentImg: user1,
      title: "Newly Built Cabin",
      description: "This is a demo real estate project! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quo repellendus est id placeat doloribus asperiores, pariatur rerum quod corporis eum ad culpa quasi, nemo animi assumenda expedita, natus error. Eum ratione quas rem similique eveniet fuga culpa ullam doloremque!",
      images: [h1, h2, h3, i2],
      date: "2025-05-10",
      bedroom: 3,
      bathroom: 2,
      type: "Sale",
      ondemand: true,
      price: 250000,
      location: "8765 High Street, London.",
      latitude: 51.4545,
      longitude: -2.5879,
    },
  ];
  
  // 
 