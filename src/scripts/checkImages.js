import https from 'https';

const books = [
  {
    title: "Deep Work",
    images: [
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "The Pragmatic Programmer",
    images: [
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "Clean Code",
    images: [
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "Atomic Habits",
    images: [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "The Psychology of Money",
    images: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "Relentless",
    images: [
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "Zero to One",
    images: [
      "https://images.unsplash.com/photo-1485988412941-77a35537dae4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "Think Like a Monk",
    images: [
      "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "The Art of War",
    images: [
      "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517373116369-9bdb8cdc9f62?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "The Innovator's Dilemma",
    images: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "Mindset",
    images: [
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1494178270175-e96de2971df9?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "The Lean Startup",
    images: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

async function checkImage(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({
        url,
        status: res.statusCode,
        working: res.statusCode === 200
      });
    }).on('error', () => {
      resolve({
        url,
        status: 'error',
        working: false
      });
    });
  });
}

async function checkAllImages() {
  console.log('Checking all book images...\n');
  
  for (const book of books) {
    console.log(`Book: ${book.title}`);
    for (const imageUrl of book.images) {
      const result = await checkImage(imageUrl);
      console.log(`  Image: ${result.working ? '✓' : '✗'} ${imageUrl}`);
      if (!result.working) {
        console.log(`  Status: ${result.status}`);
      }
    }
    console.log('');
  }
}

checkAllImages();
