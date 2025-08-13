---
title: "PayID: Desktop E-Receipt Transaction Extractor"
description: "A cross-platform Flutter desktop app that intelligently extracts transaction IDs from KBZ Pay and Wave Pay e-receipt images using Tesseract OCR, with drag-and-drop support and automated multi-platform builds."
year: 2025
image: "https://res.cloudinary.com/dpi8h7nus/image/upload/q_auto/f_auto/v1755018144/pay-id.jpg"
---

[PayID](https://github.com/kaungkhantjc/PayID) is a sophisticated cross-platform desktop application built with Flutter that revolutionizes how users extract transaction information from Myanmar's popular mobile wallet e-receipts. By leveraging the power of Tesseract OCR technology, PayID automatically identifies and extracts transaction IDs from KBZ Pay and Wave Pay receipt images with remarkable accuracy and speed.

## Solving Digital Receipt Management

### The Challenge
Managing digital payment receipts and extracting transaction IDs manually is time-consuming and error-prone, especially when dealing with:
- Multiple receipt formats from different payment providers
- Manual transcription errors when copying transaction IDs
- Need for quick verification and comparison of extracted data
- Cross-platform compatibility requirements for different operating systems

### The Solution
PayID provides an intelligent, automated solution that combines advanced OCR technology with intuitive user interface design, making transaction ID extraction as simple as a drag-and-drop operation.

## Core Features & Capabilities

### Intelligent Receipt Recognition
- **Multi-Provider Support**: Automatic detection and processing of KBZ Pay and Wave Pay receipt formats
- **Smart Text Extraction**: Powered by Tesseract OCR for accurate text recognition from receipt images
- **Transaction ID Isolation**: Intelligent parsing that specifically identifies and extracts transaction ID fields

### User-Friendly Interface
- **Dual-Pane Design**: Clean layout with left pane for input/results and right pane for full OCR output
- **Multiple Input Methods**:
    - Direct file path entry in textbox
    - Image URL input support
    - Drag-and-drop functionality from file explorers
    - Direct URL drag-and-drop from browsers
- **Visual Feedback**: Color-coded text highlighting system:
    - **Green**: Correctly matched transaction ID areas
    - **Red**: Incorrectly identified areas
    - **Black**: Remaining default text areas

### Verification & Comparison
- **Built-in Comparison Tool**: Dedicated textbox for manual verification against extracted results
- **Real-time Highlighting**: Instant visual feedback showing accuracy of extraction
- **Full OCR Results**: Complete Tesseract output displayed for comprehensive review

## Technical Architecture

### Core Technologies
- **Flutter Desktop**: Cross-platform framework enabling native performance on Windows, macOS, and Linux
- **Tesseract OCR**: Industry-standard optical character recognition engine with Myanmar language support
- **Microsoft Fluent UI**: Modern, consistent design language providing professional desktop experience
- **GitHub Actions CI/CD**: Automated build pipeline for multi-platform distribution

### Cross-Platform Build System
PayID features a sophisticated automated build system that generates optimized packages for all major desktop platforms:

**Linux Distributions:**
- `PayID-1.0.1-linux-aarch64.AppImage`
- `PayID-1.0.1-linux-aarch64.deb`
- `PayID-1.0.1-linux-aarch64.tar.gz`
- `PayID-1.0.1-linux-amd64.AppImage`
- `PayID-1.0.1-linux-amd64.deb`
- `PayID-1.0.1-linux-amd64.tar.gz`

**macOS Packages:**
- `PayID-1.0.1-macos-universal.dmg`
- `PayID-1.0.1-macos-universal.zip`

**Windows Distributions:**
- `PayID-1.0.1-windows-x64.exe`
- `PayID-1.0.1-windows-x64.zip`

## Installation & Setup

### Prerequisites
PayID requires Tesseract CLI to be installed on the target system with Myanmar language support.

### Tesseract Installation Guide

**Windows:**
```text
1. Download .exe from tesseract releases page
2. Run installer
3. Select "Additional script data > Myanmar script"
4. Select "Additional language data > Burmese"