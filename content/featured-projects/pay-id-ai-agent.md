---
title: "Pay ID AI Agent: Instant E-Receipt Parsing"
description: "An open-source, serverless API powered by Gemini to intelligently extract transaction IDs from Myanmar mobile wallet e-receipt photos."
year: 2025
image: https://res.cloudinary.com/dpi8h7nus/image/upload/q_auto/f_auto/v1754822032/pay-id-ai-agent.jpg
---

[Pay ID AI Agent](https://github.com/kaungkhantjc/pay-id-ai-agent) is a lightweight, open-source, and AI-powered API designed to streamline a common but tedious task for developers: extracting transaction data from e-receipts. Specifically built for Myanmar's popular mobile wallet platforms (like KBZ Pay, WavePay, and AYA Pay), this tool accepts a receipt photo and intelligently returns a structured JSON response containing the transaction ID and an explanation of how it was identified.

## The Developer Challenge: Automating Receipt Data

Manually processing e-receipts is slow, error-prone, and a significant barrier to creating smooth financial workflows in applications. Developers need a simple, fast, and cost-effective way to get critical data, like a transaction ID, from an image without building a complex OCR and parsing system from scratch.

> Pay ID AI Agent abstracts the complexity of vision AI, offering developers a simple endpoint to automate receipt data extraction.

## Core Features & Capabilities

- **Intelligent Extraction**: Powered by Google's **Gemini 2.5 Flash Lite** vision model for ultra-fast and accurate recognition of transaction IDs from various receipt layouts.
- **Lightweight & Serverless**: Built with the **Hono JS** framework and deployed on **Cloudflare Workers**, ensuring high performance, low latency, and infinite scalability with zero infrastructure maintenance.
- **Developer-Focused Output**: The API returns a clean JSON object including the `transaction_id`, the `reason` for its extraction (e.g., "Found 'Transaction ID' label"), and detailed `usageMetadata` for token tracking.
- **Flexible Input**: Accepts an image via either a direct file upload or a public `image_url`.

## Technical Architecture

- **Framework**: Hono JS
- **Language**: TypeScript
- **Platform**: Cloudflare Workers (Serverless)
- **AI Model**: Google Gemini 2.5 Flash Lite
- **License**: Apache 2.0

## Example Use Case

A simple `POST` request to the API endpoint is all that's needed to process a receipt.

**Endpoint:** `POST /generate`

**Demo API:**
```text
https://pay-id-ai-agent.jcoder.workers.dev/generate
```

**Request Body:**
```json
{
  // Required
  "agent_token": "HuE60doYwlWdB2X7K5F9E529Lr20qu6PsRsk4Nc",
  // Required
  "gemini_key": "your-gemini-api-key",
  // Optional
  "image_url": "https://example.com/receipt.jpg",
  // Optional
  "image": "<image file>"
}
```

> [!NOTE]
> - agent_token is the API access key of this AI agent.
> - gemini_key is your own [Google AI Studio API key](https://aistudio.google.com/app/apikey).
> - You must provide either `image_url` or `image`, but not both.


#### Example Response

```json
{
  "status": true,
  "data": {
    "content": {
      "reason": "Found 'Transaction ID' label",
      "app": "KBZ Pay",
      "transaction_id": "123456789"
    },
    "rawContent": "{\n  \"reason\": \"Found 'Transaction ID' label\",\n  \"transaction_id\": \"123456789\"\n}",
    "usageMetadata": {
      "promptTokenCount": 435,
      "candidatesTokenCount": 45,
      "totalTokenCount": 480,
      "promptTokensDetails": [
        {
          "modality": "TEXT",
          "tokenCount": 177
        },
        {
          "modality": "IMAGE",
          "tokenCount": 258
        }
      ]
    },
    "modelVersion": "gemini-2.5-flash-lite-preview-06-17",
    "responseId": "xxxxxxxxxx-xxxxxxxxxxxx"
  },
  "message": null
}
```
