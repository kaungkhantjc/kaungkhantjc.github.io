---
title: "GCPReady: Your One-Line Command for GCP VPNs"
description: "An open-source web tool that generates single-line bash commands to instantly deploy various VPN configurations on Google Cloud Platform."
year: 2022
image: https://res.cloudinary.com/dpi8h7nus/image/upload/q_auto/f_auto/v1754878220/gcp-ready.png
---

GCPReady is an open-source web application designed to dramatically simplify the process of setting up a VPN on the Google Cloud Platform. Instead of navigating through multiple menus and configuration steps, users can leverage a clean web UI to generate a single, powerful bash command to deploy their desired VPN setup.

## An Educational Tool for Cloud Learners

This project was primarily built to assist learners using platforms like **Google Cloud Skill Boost**. The goal is to allow students to quickly set up networking environments for educational purposes, focusing on the learning objectives rather than getting bogged down by repetitive setup tasks. It embodies the principle of automating infrastructure to accelerate learning and experimentation.

> GCPReady transforms a multistep, manual configuration process into a simple copy-and-paste command, perfect for rapid prototyping and cloud skill development.

## Available Versions & Features

GCPReady has evolved through several versions, each offering different capabilities and levels of automation.

### v4 - SSH Tunnel (Latest)
The most streamlined version, this tool generates a single command to create a GCP instance and configure it as an SSH tunnel VPN.
- **User Inputs**: Instance Name, Firewall Name, Username, Password, Machine Type, Region Zone, and a custom Server Message (using a Summernote editor).
- **Output**: A single, self-contained bash command. When run in the GCP console, it provisions the instance and sets up the SSH server, ready for use with any SSH tunnel-supported VPN client.

### v3 - x-ui Panel
Similar to v4 in its one-line command approach, but instead deploys the powerful `x-ui` VPN management panel, which supports multiple protocols (VMESS, VLESS, Trojan, etc.).
- **User Inputs**: Instance Name, Firewall Name, x-ui Username, Password, Port, Machine Type, and Region Zone.
- **Output**: A single bash command that creates the GCP instance and installs `x-ui`, making a full-featured VPN server accessible through a web panel.

### v2 - x-ui (Guided Lab Version)
This version was tailored specifically to work within the instructional flow of a Google Cloud Skill Boost lab, requiring multiple steps but automating the installation of `x-ui`.
- **User Inputs**: Project ID, Zone, and Firewall Name.
- **Output**: Generates guided bash scripts to create a GCP instance and install the `x-ui` panel with default credentials, following the lab's structure.

### v1 - x-ui (Manual Steps)
The initial version, which required a two-step process to set up the `x-ui` panel.
- **User Inputs**: Project ID, Project Number, Firewall Name, Instance Name, Machine Type, and Region Zone.
- **Output**: Produces two separate bash scripts—one to create the firewall rule and a second to create the instance and install `x-ui`.

## Technical Stack
GCPReady is built with a focus on simplicity, accessibility, and performance using fundamental web technologies.
- **Frontend**: Bootstrap 5 and Vanilla JavaScript
- **Code Highlighting**: Prism JS for clear presentation of the generated bash scripts.
- **Core Logic**: Bash shell scripting is at the heart of the generated commands, performing all the automation within the GCP environment.