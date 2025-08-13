---
title: "Pic2Text: Sharing Images via SMS"
description: "An open-source Android app designed to convert images into text for transmission via SMS, bypassing internet blackouts and ensuring visual communication remains possible."
year: 2021
image: https://res.cloudinary.com/dpi8h7nus/image/upload/q_auto/f_auto/v1754816230/pic-to-text.jpg
---

Pic2Text is an open-source native Android application born from necessity. It was developed as a direct response to situations where internet access is restricted or completely cut off, but cellular networks for calls and SMS remain operational. The app provides a vital communication bridge, allowing users to share visual information by converting images into text and transmitting them seamlessly through standard SMS.

- PicSMS (Pic2Text) v1.1.0 release intro
https://www.facebook.com/share/p/1EpsjEt8Y6

- PicSMS (Pic2Text) initial release video
https://www.facebook.com/share/v/1YWte6NRpG

## The Challenge: Communication in a Disconnected World

In 2021, during widespread internet blackouts in Myanmar, communication was suddenly limited to voice calls and SMS. The inability to share images—whether they were important documents, personal photos, or critical information—created a significant communication gap. With MMS (Multimedia Messaging Service) being largely unsupported or unavailable, a new solution was required.

> Pic2Text was engineered to solve this specific problem: How can people share pictures when their only tool is a 160-character text message?

## Core Features & Technical Implementation

The app is built around a robust encoding and messaging pipeline, designed for efficiency, reliability, and user control.

### Picture-to-Text Conversion
- **Dual Encoding Support**: Users can choose between standard **Base64** and a custom, hyperefficient **Base91** encoding designed specifically with GSM SMS character limitations in mind to produce shorter, more cost-effective messages.
- **Dynamic Image Optimization**: The app automatically optimizes image resolution and includes sliders for manual control over resolution (0-100%) and bitmap quality (0-100%) to intelligently reduce the final SMS count.
- **Intelligent SMS Splitting**:
    - The encoded text is automatically split into manageable chunks for multipart SMS.
    - An algorithm respects the standard SMS limits (up to 1224 characters for 8-part messages) to ensure delivery.
    - Users see a full preview of the message list and the total SMS count before sending.
- **Advanced Sending Workflow**: A "Prepare to Send" dialog provides a final review, including total cost warnings, phone number input, SIM card selection, and an option to set Pic2Text as the default SMS app to prevent repeated permission prompts on certain devices.

### Text-to-Picture Reconstruction
- **Multi-Source Input**: Users can paste encoded text directly or use a powerful in-app message selection tool to import text chunks from their SMS inbox.
- **Smart Message Selection**: The app features "Auto-select" functionality to intelligently gather incoming or outgoing message parts based on a user-defined time range (e.g., all parts received in the last 20 minutes).
- **Decoding Engine**: With a single tap, the app decodes the collected text chunks back into the original image, which can then be viewed, zoomed, and saved to the device's gallery.

### Picture Library & Task Management
- **Session Persistence**: Unfinished sending tasks can be saved to the "Picture Library."
- **Progress Tracking**: The app stores the customized image, the generated SMS list, and the exact position of the last successfully sent message.
- **Resume Functionality**: Users can reopen a saved task at any time and resume sending messages from where they left off, ensuring that even large images can be transmitted successfully over time.

## Technical Architecture
- **Core Technology**: Built with **native Java** for maximum performance and compatibility on a wide range of Android devices.
- **Encoding Algorithms**: Implemented Base64 and a custom **Base91** character set for optimal text length.
- **Android SMS & Telephony APIs**: Deep integration with Android's `SmsManager` for sending multipart messages and `TelephonyManager` for multi-SIM support.
- **User-Centric Settings**: Extensive customization options, including theme selection, language support (English and Myanmar), and toggles for remembering the last-used phone number and SIM slot.
- **Background Operation**: Includes an option to request the "Ignore Battery Optimizations" permission, allowing the app to reliably send long sequences of messages even when the screen is off.

## Impact & Purpose

Pic2Text is more than just a utility; it's a testament to how technology can empower people in the most challenging circumstances. By providing a reliable method for visual communication when modern internet infrastructure is unavailable, it served as an essential tool for maintaining personal and informational connections. As an open-source project, it stands as a resource for developers and a solution for communities facing similar connectivity challenges worldwide.
