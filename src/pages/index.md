---
title: "Benjamin Schreiber"
description: "Resume and portfolio website for Benjamin Schreiber"
---
<header>
  <nav>
    <ul>
      <li><a href="/vpt.html">VPT</a></li>
      <li><span>|</span></li>
      <li><a href="#the-cloesce-schema-language">Cloesce</a></li>
    </ul>
  </nav>
</header>

# Benjamin Schreiber

**B.S. Computer Science | Washington State University**  

<div style="display: flex; gap: 1.25rem; flex-wrap: wrap; margin: 0.5rem 0; font-size: 0.95rem;">
  <a href="https://www.linkedin.com/in/benjamin-schreiber-a14aa219a/">LinkedIn</a>
  <a href="https://github.com/bens-schreiber">GitHub</a>
  <a href="mailto:bpschreiber2003@gmail.com">Email</a>
</div>

---

## Now

I started as a **Systems Engineer at Cloudflare** on August 3rd, where I work on the infrastructure side of [R2](https://www.cloudflare.com/developer-platform/products/r2/), Cloudflares S3-compatible Object Storage platform.

Most of my time is spent learning the ins and outs of R2, and researching the wide world of distributed object storage.

I recently launched a new project in my free time called [Horse Holder](https://horseholder.com), a free (or self hostable) API to ensure that you don't exceed your cloud provider's usage limits and get charged for overages. While it is fully working and you can claim a free API key, I'll probably be making breaking changes to the API as I continue to develop it.

---

## About

| | |
|---|---|
| **Systems Engineer \| Cloudflare** | 08/2026 - *forseeable future* |
| **Software Engineer Intern \| Cloudflare** | 05/2025 - 08/2025 |
| **Software Developer Intern \| IntelliTect** | 06/2022 - 08/2024 |


As a Systems Engineer, I have experience working with:

- Rust
- C (eBPF)
- CockroachDB
- Grafana
- Clickhouse

For full stack development, I have experience working with:

- TypeScript (Vue)
- C# (Entity Framework, ASP.NET)
- Dart (Flutter, Riverpod)
- Azure
- SQL Server

In my free time, I regularly develop with:

- Python
- Raylib
- [Cloesce](https://cloesce.pages.dev)
- Cloudflare

---

## The Cloesce Schema Language

*Cloesce* is a schema language for building full stack web applications hosted on Cloudflare. It unites common schemas used in web development such as Infrastructure-as-Code, Object Relational Mapping, RPC-style backend and client stubs, and runtime validation into a single cohesive language. Write your schema, compile, and you get a full stack web app deployed in one command.

Cloesce was created as my senior capstone project at Washington State University after I pitched the abstract idea to Cloudflare, who agreed to sponsor the project and provide mentorship. In April of 2026, Cloesce won first in the WSU Voiland College of Engineering Senior Design Poster Competition, and helped me in being honored as the VCEA Outstanding Senior of the Year in Computer Science.

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

## Triangle Fraternity at WSU

My proudest project is the **Triangle Fraternity at Washington State University**, a fraternity for STEM majors which I founded in 2022. In just a few short years (2022-2026), Triangle has achieved:
- Growing from just 7 members to 60+
- Achieved the highest average GPA three semesters in a row
- Awarded the prestigious "Top Chapter" award in 2025 from the Interfraternity Council
- Recognized nationally by the Triangle Fraternity Headquarters as the "Chapter of the Year"
- Maintained over 50% of our members working summer internships in industry

Most significant of all, Triangle aquired a chapter house for the 2026-2027 school year, a huge milestone for the fraternity and a testament to the hard work of all of our members. I'm excited to see what the future holds for Triangle, and I'm eager to support the next generation as an alumnus.

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