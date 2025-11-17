1.What are some differences between interfaces and types in TypeScript?
 a.Interface সাধারণত অবজেক্টের কাঠামো নির্ধারণে ব্যবহৃত হয় কিন্তু Type শুধু object নয়, union, tuple, primitive ইত্যাদিও নির্ধারণ করতে পারে |
 b.একটি interface দুইবার লিখলে TypeScript সেগুলো merge করে ফেলে কিন্তু type alias-এ declaration merging হয় না, একাধিকবার type alias ঘোষণা করলে error হয়।
 c.interface Union support করে না কিন্তু type support করে


2.What is the use of the keyof keyword in TypeScript? Provide an example.
 keyof কোনো object type-এর সব property নামকে একটি union টাইপ হিসেবে রিটার্ন করে।

 example: 

    interface Product {
    name: string;
    price: number;
    quantity: number;
    }

    type ProductKeys = keyof Product;


    output —

    "name" | "price" | "quantity"
