# Competitive scan: spatial commerce and flooring visualisation

## Summary

This market is active and visibly crowded.

There are many existing products for:

- flooring visualisation from uploaded room photos;
- embedded retailer/manufacturer visualisers;
- iPhone LiDAR room scanning;
- floor plan generation;
- AR interior design;
- product catalogue visualisation.

The opportunity is not "build a flooring visualizer." That already exists.

The better wedge would be:

> Quote-ready spatial commerce for local flooring installers.

That means combining visualisation with measurement, product catalogue, lead qualification, quoting, and installer workflow.

## Existing competitors

### Roomvo / Leap Tools

Positioning:

- leading room visualizer for flooring and home improvement retailers/manufacturers;
- upload photo or use demo scene;
- visualise flooring products directly on retailer websites;
- supports retailers, manufacturers, and distributors;
- claims use by thousands of dealers.

Sources:

- `https://get.roomvo.com/`
- `https://get.roomvo.com/solutions/visualizer-flooring-retailers/`
- `https://get.roomvo.com/manufacturers/`

Implication:

Roomvo is a major incumbent. Do not compete as a generic embedded visualizer.

### Floori

Positioning:

- AI tools for floors, tiles, walls, and surfaces;
- product digitisation, visualizer, AR previews, kiosks, ecommerce integrations, analytics, dealer maps;
- self-managed product portal and catalogue workflows;
- scanner for high-quality product textures.

Sources:

- `https://floori.io/homepage/`
- `https://floori.io/floori-visualizer/`

Implication:

Floori already covers a lot of the manufacturer/distributor/catalogue side.

### Broadlume

Positioning:

- flooring retail selling system;
- in-store visualisation;
- digital platform for flooring retailers.

Source:

- `https://www.broadlume.com/products/retail-selling-system/in-store-visualization`

Implication:

Retailer workflow platforms already exist, especially in the US market.

### roomWIZ

Positioning:

- AI-powered floor visualizer for wood flooring, carpets, and tiles;
- product catalogue support;
- AI search to match reference images to products;
- lighting, shadows, and product variation.

Source:

- `https://www.room-wiz.com/`

### Mobile scanning / floor plan apps

Representative products:

- Roomantic;
- Magicplan;
- RoomPlot;
- Oareo;
- SecondFloor;
- 5DPlan;
- Matterport;
- Draftwell;
- Alcovia.

What they cover:

- iPhone LiDAR scanning;
- 2D floor plans;
- 3D room models;
- dimensions and square footage;
- AR / remodel visualisation;
- export formats.

Sources:

- `https://www.roomantic.ai/`
- `https://www.secondfloorapp.com/`
- `https://roomplot.com/`
- `https://www.oareo.com/`
- `https://draftwell.ai/`
- `https://alcovia.ai/`

## Technical platform signals

Apple RoomPlan is the obvious mobile scanning foundation.

Apple describes RoomPlan as an ARKit-powered API that uses the camera and LiDAR Scanner on iPhone/iPad to create a 3D floor plan of a room, including dimensions and types of furniture.

RoomPlan outputs a parametric room representation and can export USD, USDA, or USDZ.

Sources:

- `https://developer.apple.com/augmented-reality/roomplan/`
- `https://machinelearning.apple.com/research/roomplan`

## Open-source / hobbyist signals

There are developer demos using:

- semantic segmentation;
- perspective warping;
- texture mapping;
- uploaded product textures;
- SegFormer / OpenCV-style pipelines.

This means a basic photo-to-floor-overlay prototype is achievable, but it is not differentiated by itself.

## Where the market is crowded

Avoid positioning as:

- "AI flooring visualizer";
- "Roomvo alternative";
- "upload a room photo and swap floors";
- "iPhone floor plan scanner";
- "AR interior design app";
- "generic ecommerce flooring catalogue."

These already exist in many forms.

## Potential wedge

The more interesting product:

> Sales and quoting copilot for local flooring installers.

Instead of stopping at "see this floor in your room," the workflow becomes:

1. Customer uploads room photos or scans the room.
2. AI detects floor area, room shape, doors, trims, obstacles, and potentially staircases.
3. System estimates square meterage, waste factor, material quantity, underlay, trims, and labour complexity.
4. Customer previews several product options from local supplier catalogues.
5. System produces an indicative quote range.
6. Installer receives a qualified lead with measurements, photos, selected products, budget, and constraints.
7. Installer confirms quote or books a site visit.

## Why this could be useful

For customers:

- less imagination required;
- faster rough pricing;
- easier product comparison;
- less friction before contacting installer.

For installers:

- better-qualified leads;
- less time wasted on poor-fit enquiries;
- faster quoting;
- more professional sales experience;
- product upsell and cross-sell;
- possible reduced dependence on expensive visualizer platforms.

## Portfolio value

This could showcase:

- computer vision;
- semantic segmentation;
- perspective transforms;
- material rendering;
- Apple RoomPlan / LiDAR / USDZ;
- 3D geometry;
- ecommerce/catalogue integration;
- quote generation;
- business workflow design;
- dashboard and analytics;
- AI-assisted sales automation.

It is visually engaging, commercially tangible, and easy for non-technical people to understand.

## Risks

- Strong incumbents already exist.
- Accurate measurement is harder than visualisation.
- Manufacturer product catalogue data can be messy or locked down.
- Photorealistic material rendering is hard.
- iPhone LiDAR scanning limits the addressable customer base.
- A serious iOS app adds development overhead.
- Flooring-specific details matter: pattern direction, plank dimensions, waste, subfloor, transitions, stairs, trims, moisture, installation method.

## Possible MVP

Build a web-first MVP:

- upload a room photo;
- detect floor area using segmentation;
- overlay uploaded flooring texture with perspective correction;
- choose product from a small catalogue;
- enter room dimensions manually;
- estimate material quantity, waste, and rough installed cost;
- produce a lead/quote summary for the installer;
- dashboard shows visualisations, quote requests, conversion funnel, and product interest.

Then add:

- iPhone RoomPlan scan import;
- USDZ/3D model viewer;
- multi-room project estimates;
- supplier catalogue feeds;
- installer portal;
- quote confidence scoring.

## Monetisation options

- monthly SaaS for small flooring installers;
- per-lead fee;
- white-label website plugin;
- quote/intake automation for trades;
- paid setup for catalogue onboarding;
- premium 3D scan/quote workflow;
- agency-style implementation for local trades.

## Current recommendation

This is worth keeping as a serious candidate, but not as a pure visualizer.

The strongest framing:

> AI spatial sales copilot for flooring installers.

This could be very fun and demo-friendly, but it is more crowded than the CloudOps Agent Lab idea and less aligned with frontier-lab agent research. It may be stronger as a sellable local-business product than as a frontier-AI portfolio project.

