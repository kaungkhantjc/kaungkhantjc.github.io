---
title: "UniZG: Bridging Myanmar's Digital Divide"
description: A timely utility app that became an essential tool during Myanmar's Unicode revolution, converting texts, contacts and file names across the entire device with over 200K+ users.
year: 2019
image: https://res.cloudinary.com/dpi8h7nus/image/upload/q_auto/f_auto/v1754121574/uni-zg.jpg
---

UniZG emerged during one of Myanmar's most significant digital transitions - the Unicode revolution of 2019. This native Android application became an essential bridge between Myanmar's legacy Zawgyi font system and the new Unicode standard, serving over 200K+ users during a critical period in the country's digital evolution.

## The Unicode Revolution Crisis

### Historical Context
From 2005 to 2019, Myanmar's entire digital ecosystem relied on Zawgyi font for Myanmar script rendering. While Zawgyi followed Unicode standards for basic Myanmar vowels (က to အ), it deviated significantly for consonant medials (သရတွဲ), creating a non-standard implementation that became deeply embedded in Myanmar's digital infrastructure.

### The Migration Challenge
When the Myanmar developer community introduced "Pyidaungsu font" in 2019 - a true Unicode-compliant alternative - the transition faced massive resistance:

- **Typing Complexity**: Unicode required a different typing style for Pali words (စာလုံးဆင့်များ) compared to the Zawgyi keyboard layout, fundamentally changing how users typed
- **Device Limitations**: Most older Android devices lacked font customization capabilities and often required **root access**
- **Legacy Content Crisis**: 14 years of Zawgyi-encoded content (texts, music files, videos, contacts, notes) would display incorrectly in Unicode
- **Cross-Platform Compatibility**: Fear of seeing garbled text on Google, social media, and SMS when others used different font standards

> UniZG solved Myanmar's biggest digital migration challenge by making font conversion accessible to every Android user, regardless of technical expertise.

## Core Features & Technical Implementation

### Smart Detection System
- **Automatic Font Detection**: Intelligently identifies whether the device uses Unicode or Zawgyi encoding
- **Bidirectional Conversion**: Seamless conversion between Unicode ↔ Zawgyi in both directions
- **Auto-Convert Mode**: Real-time conversion capabilities for instant text transformation

### Comprehensive Content Migration

#### Note Management System
- **Note Changer v1**: Leverages Android Accessibility Services to convert text within various note applications with single-tap interaction
- **Note Changer v2**: Custom keyboard implementation for apps that don't use native Android EditText components
- **Universal Compatibility**: Works across multiple note-taking applications regardless of their underlying text rendering system

#### Multimedia File Conversion
- **Video File Names**: Batch conversion of video file names and metadata
- **Audio Metadata Processing**: Complete music file conversion including ID3 tags using Mp3Agic library integration
- **Image File Management**: Comprehensive image file name conversion with format preservation

#### System-Wide Integration
- **Contact Database**: Direct conversion of contact names stored in Android's contact database
- **File System**: Folder names, document files, archive files, and custom file extensions
- **Batch Processing**: "Convert All" feature for simultaneous conversion across all supported content types

### Advanced File Management

#### Storage Access
- **Internal Storage**: Full device storage access for comprehensive file conversion
- **SD Card Support**: External storage compatibility for expanded conversion capabilities
- **Restricted Folders**: User-defined folder exclusion system to prevent unwanted conversions

#### Safety Features
- **Selective Conversion**: Granular control over which content types to convert
- **Folder Protection**: Whitelist system for sensitive directories

## Technical Architecture

### Core Technologies
- **Native Java Development**: Built entirely with Java for optimal Android performance
- **Android Accessibility Services**: Deep system integration for seamless note conversion
- **Custom Input Method**: Keyboard service implementation for universal app compatibility
- **Mp3Agic Library**: Professional-grade audio metadata manipulation
- **File System APIs**: Comprehensive storage access across internal and external storage

### Performance Optimization
- **Batch Processing Engine**: Efficient algorithms for handling large-scale file conversions
- **Memory Management**: Optimized for devices with limited RAM capabilities
- **Background Processing**: Non-blocking conversion operations for smooth user experience

## Market Impact & User Adoption

### Massive User Base
UniZG achieved remarkable success with over 200K+ active users, making it one of Myanmar's most downloaded utility applications during the Unicode transition period.

### Cultural Significance
The application didn't just solve a technical problem - it preserved Myanmar's digital heritage by enabling users to migrate their entire digital content library without losing years of accumulated data.

### Social Media Validation
The app's impact is documented across Myanmar's social platforms, with thousands of user testimonials highlighting its essential role in the country's digital transformation.

## Legacy & Impact

UniZG represents more than a utility app - it's a cultural preservation tool that enabled an entire nation to transition to modern Unicode standards while maintaining their digital heritage. The application demonstrated how thoughtful software development can solve complex socio-technical challenges affecting millions of users.

The project showcases expertise in:
- **Cultural Computing**: Understanding and solving region-specific digital challenges
- **System-Level Integration**: Deep Android system access and manipulation
- **Mass-Scale Deployment**: Serving hundreds of thousands of concurrent users
- **Legacy System Migration**: Bridging old and new technological standards

## Resources

- **Download**: [UniZG on APKPure](https://apkpure.com/unizg/com.justicecoder.unizg)
- **Community**: [User testimonials on Facebook](https://www.facebook.com/search/posts/?q=com.justicecoder.unizg)

This project stands as a testament to the power of native Android development in solving real-world problems that affect entire communities, demonstrating both technical excellence and cultural sensitivity.