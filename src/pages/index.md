---
title: "Benjamin Schreiber"
description: "Resume and portfolio website for Benjamin Schreiber"
---
<header>
  <nav>
    <ul>
      <li><a href="/resume.pdf">Resume</a></li>
      <li><span>|</span></li>
      <li><a href="/vpt.html">VPT</a></li>
      <li><span>|</span></li>
      <li><a href="#the-cloesce-schema-language">Cloesce</a></li>
    </ul>
  </nav>
</header>

# Benjamin Schreiber

**B.S. Computer Science | Washington State University**  
Graduating May 2026

<div style="display: flex; gap: 1.25rem; flex-wrap: wrap; margin: 0.5rem 0; font-size: 0.95rem;">
  <a href="https://www.linkedin.com/in/benjamin-schreiber-a14aa219a/">LinkedIn</a>
  <a href="https://github.com/bens-schreiber">GitHub</a>
  <a href="mailto:bpschreiber2003@gmail.com">Email</a>
</div>

---

## Now

In August, after graduating in May, I'll be starting as a **Systems Engineer at Cloudflare**, where I'll be working on the infrastructure side of the [R2 Object Storage](https://www.cloudflare.com/developer-platform/products/r2/) platform. 

I spend most of my free time working on the [Cloesce Schema Language](https://cloesce.pages.dev) (a passion project that also happens to be my senior capstone) and working as a Teaching Assistant for an introductory programming course at WSU. I stay involved on campus as a member of the Triangle Fraternity.

---

## About

| | |
|---|---|
| **Systems Engineer \| Cloudflare \| Austin, Texas** | 08/2026 - *forseeable future* |
| **Software Engineer Intern \| Cloudflare \| Austin, Texas** | 05/2025 - 08/2025 |
| **Software Developer Intern \| IntelliTect \| Spokane, Washington** | 02/2024 - 08/2024 | 06/2022 - 10/2023 |


As a Systems Engineer, I have experience working with:

- Rust (Tokio, Axum)
- C (eBPF)
- CockroachDB
- Grafana
- ClickHouse

For full stack development, I have experience working with:

- TypeScript (Vue, React)
- C# (Entity Framework, ASP.NET, Coalesce, xUnit, Moq)
- Dart (Flutter, Riverpod)
- Azure
- SQL Server

In my free time, I regularly develop with:

- Python
- PostgreSQL
- RayLib, RayGUI
- [Cloesce](https://cloesce.pages.dev)


My proudest project is the **Triangle Fraternity at Washington State University**, a fraternity for STEM majors which I founded in 2022. Since then, we have accomplished so much in such a short amount of time, including:
- Growing from just 7 members to 60+
- Achieved the highest average GPA three semesters in a row
- Awarded the prestigious "Top Chapter" award in 2025 from the Interfraternity Council
- Recognized nationally by the Triangle Fraternity Headquarters as the "Chapter of the Year"
- Maintained over 50% of our members working summer internships in industry

Most significant of all, Triangle aquired a chapter house for the 2026-2027 school year, a huge milestone for the fraternity and a testament to the hard work of all of our members. I'm excited to see what the future holds for Triangle, and I'm eager to support the next generation as an alumnus.

---

## The Cloesce Schema Language

*Cloesce* is a web framework and schema language for building full stack web applications. It unites common schemas used in web development such as Infrastructure-as-Code, Object Relational Mapping, RPC-style backend and client stubs, and runtime validation into a single cohesive language. Write your schema, compile, and you get a full stack web app deployed in one command.

It's all built on top of Cloudflare Workers, and provides a novel ORM for not just SQL databases, but also Cloudflare KV and R2.

While interning at Cloudflare, I had noticed many of the engineers spent time on hobby projects to improve the developer experience of Cloudflare's products. Cloesce is my take on what development for Cloudflare can look like.

Cloesce is essentially a cumulative summary of all of the knowledge and patterns I have gained from my experience working with both IntelliTect and Cloudflare. The project is highly ambitious, and I am incredibly proud of the progress I have made so far in the release of the first alpha.

Check out the [official documentation](https://cloesce.pages.dev) to see what it is all about.


---

## Virtual Packet Tracer

VPT is a Cisco Packet Tracer inspired simulation tool which allows you to create virtual network environments, test communication between devices, trace packets, and inspect input and output. Packets are fully serialized to byte level before being transmitted across devices. Simulates layers 1, 2, and 3 of the OSI model and stays true to their IEEE standards.

I began development on VPT in late 2024 as a way to both reinforce and demonstrate the knowledge I had gained from previous Cisco networking courses I had taken. It played a significant role in my hiring as an intern at Cloudflare, where I ended up working on low level networking in Rust.

Currently, Virtual Packet Tracer is capable of simulating:

1. Physical Ethernet Ports and Ethernet Cable Connection
2. Mac Addresses (Broadcast, Multicast, Unicast)
3. Ethernet II standard
4. Ethernet 802.3 standard (reserved for rapid spanning tree)
5. Address Resolution Protocol (ARP)
6. Layer 2 Switches with Rapid Spanning Tree Protocol over Bridge Protocol Data Units
7. IPv4 (Broadcast, Multicast, Unicast) along with subnet masks
8. Internet Control Message Protocol
9. Layer 3 Desktops with the ping command
10. Layer 3 Routers equipped with Routing Information Protocol and Subnetting

VPT was created using Rust, utilizing the built in Rust test suite for test driven development. The project is split into two parts, the first being the networking components completely made from scratch, and the second being the graphical interface which uses both RayLib and RayGUI.

You can view a WASM compiled version of the program [here](/vpt.html).

---

© Benjamin Schreiber | [bschr.dev](https://bschr.dev)

<style>
body {
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.6;
  color: #333;
  padding: 0;
  margin: 1rem max(1.25rem, 12.5vw);
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1.25rem;
  align-items: center;
  flex-wrap: wrap;
}

nav a {
  color: #333;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

a {
  color: #0066cc;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

hr {
  border: none;
  border-top: 1px solid #ddd;
  margin: 1rem 0;
}

ul, ol {
  margin: 1rem 0;
}

table {
  width: 50vw;
  border-collapse: collapse;
}


</style>