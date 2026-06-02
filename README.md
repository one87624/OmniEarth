# OmniEarth: A Benchmark for Evaluating Vision-Language Models in Geospatial Tasks

## Abstract

Vision-Language Models (VLMs) have demonstrated effective perception and reasoning capabilities on general-domain tasks, leading to growing interest in their application to Earth observation. However, a systematic benchmark for comprehensively evaluating remote sensing vision-language models (RSVLMs) remains lacking. To address this gap, we introduce OmniEarth, a benchmark for evaluating RSVLMs under realistic Earth observation scenarios. OmniEarth organizes tasks along three capability dimensions: perception, reasoning, and robustness. It defines 28 fine-grained tasks covering multi-source sensing data and diverse geospatial contexts. The benchmark supports two task formulations: multiple-choice VQA and open-ended VQA. The latter includes pure text outputs for captioning tasks, bounding box outputs for visual grounding tasks, and mask outputs for segmentation tasks. To reduce linguistic bias and examine whether model predictions rely on visual evidence, OmniEarth adopts a blind test protocol and a quintuple semantic consistency requirement. OmniEarth includes 9,275 carefully quality-controlled images, including proprietary satellite imagery from Jilin-1 (JL-1), along with 44,210 manually verified instructions. We conduct a systematic evaluation of contrastive learning-based models, general closed-source and open-source VLMs, as well as RSVLMs. Results show that existing VLMs still struggle with geospatially complex tasks, revealing clear gaps that need to be addressed for remote sensing applications. OmniEarth is publicly available at https://huggingface.co/datasets/sjeeudd/OmniEarth.

## 📂 Data Structure

OmniEarth is organized according to the three-tier hierarchical dimension taxonomy, structured as follows:

```text
├── Perception
│   ├── A1.1-Scene Classification
│   │   ├── images
│   │   └── scene classification.json
│   ├── A1.2-Land-cover Classification
│   │   ├── images
│   │   └── land-cover classification.json
│   ├── A1.3-Image Modality Recognition
│   │   ├── image modality recognition.json
│   │   └── images
│   ├── A1.4-Image Caption
│   │   ├── image caption.json
│   │   └── images
│   ├── A2.1-Visual Grounding
│   │   ├── images
│   │   └── visual grounding.json
│   ├── A2.2-Referring Expression Comprehension
│   │   ├── images
│   │   └── referring expression comprehension.json
│   ├── A2.3-Object Counting
│   │   ├── images
│   │   └── object counting.json
│   ├── A2.4-Fine-grained Category Classification_new
│   │   ├── fine-grained category classification.json
│   │   └── images
│   ├── A2.5-Attribute Recognition
│   │   ├── attribute recognition.json
│   │   └── images
│   ├── A3.1-Referring Expression Segmentation
│   │   ├── images
│   │   ├── masks
│   │   └── referring expression segmentation.json
│   ├── A3.2-Generalized Referring Expression Segmentation
│   │   ├── generalized referring expression segmentation.json
│   │   ├── images
│   │   └── masks
│   └── A3.3-Change Mask Segmentation
│       ├── change mask segmentation.json
│       ├── images
│       └── masks
├── Reasoning
│   ├── B1.1-Spatial Relationship Reasoning
│   │   ├── images
│   │   └── spatial relationship reasoning.json
│   ├── B1.2-Geometric Measurement
│   │   ├── geometric measurement.json
│   │   └── images
│   ├── B1.3-Functional Region Localization
│   │   ├── functional region localization.json
│   │   └── images
│   ├── B2.1-Change Description
│   │   ├── change description.json
│   │   └── images
│   ├── B2.2-Damage Assessment Reasoning
│   │   ├── damage assessment reasoning.json
│   │   └── images
│   ├── B2.3-Long-term Trend Reasoning
│   │   ├── images
│   │   └── long-term trend reasoning.json
│   ├── B2.4-Seasonal Temporal Reasoning
│   │   ├── images
│   │   └── seasonal temporal reasoning.json
│   ├── B3.1-Geo-localization Reasoning
│   │   ├── geo-localization reasoning.json
│   │   └── images
│   ├── B3.2-Disaster Cause Inference
│   │   ├── disaster cause inference.json
│   │   └── images
│   ├── B3.3-Geo-Entity Understanding
│   │   ├── geo-entity understanding.json
│   │   └── images
│   ├── B3.4-Planning Suggestions
│   │   ├── images
│   │   └── planning suggestions.json
│   └── B3.5 City Recognition
│       ├── city recognition.json
│       └── images
└── Robustness
    ├── C1.1-Image Condition Assessment
    │   ├── image condition assessment.json
    │   └── images
    ├── C1.2-Degraded-condition VQA
    │   ├── degraded-condition vqa.json
    │   └── images
    ├── C2.1-Hallucination Detection
    │   ├── hallucination detection.json
    │   └── images
    └── C2.2-Semantic consistency
        ├── images
        └── semantic consistency.json
```

## 🌰 Example

An example of the Multiple-Choice Question (MCQ) is as follows:

```json
{
    "image_path": "Perception_A1.1_001.jpg",
    "ground_truth": "golf_course",
    "ground_truth_option": "D",
    "options": "A. race track   B. baseball field   C. amusement park   D. golf course   E. airport   F. stadium",
    "prompts": [
        "What type of scene is depicted in this satellite image?",
        "Identify the category of this landscape.",
        "What is the primary land use shown in this aerial view?",
        "Which kind of recreational or functional area appears in this image?",
        "What is the primary purpose of the area depicted in this image?"
    ],
    "question_id": 1
}
```

## 📦 Download

You can download the dataset using either the Python API or the Command Line Interface (CLI). Choose the method that best fits your workflow.

### Method 1: Via Python Code

The easiest way to load the dataset into your project is by using the official Hugging Face datasets library.

First, install the library if you haven't already:

```bash
pip install datasets
```

Then, load the dataset in your Python script:

```python
from datasets import load_dataset

# Load the dataset directly from Hugging Face
dataset = load_dataset("sjeeudd/OmniEarth")

# Optional: Save the dataset to a local directory for offline use
# dataset.save_to_disk("./OmniEarth")
```

### Method 2: Via Command Line CLI

If you prefer to download the raw files directly to your local machine, you can use the Hugging Face CLI.

```bash
# Install the CLI tool
pip install -U "huggingface_hub[cli]"

# Download the dataset to a specific local directory
huggingface-cli download --repo-type dataset sjeeudd/OmniEarth --local-dir ./OmniEarth
```

## Data Sources and Processing Methods for OmniEarth Benchmark Tasks

The table below provides a detailed overview of the datasets used for each task in the OmniEarth benchmark. It also outlines the data processing methods employed, including label-driven and manual validation, as well as AI-assisted processing for different task categories.

## I. Perception Tasks 12 items

| Task Abbreviation | Full Task Name Task | Corresponding Datasets Datasets | Number of Samples | Processing Method |
|---|---|---|---|---|
| SC | Scene Classification | AIR-SARship-1, AIR-SARship-2, fMow, JL-1, SAR-Aircraft | fMow: 258, AIR-SARship-1, AIR-SARship-2, SAR-Aircraft: 140, JL-1: 2 | 65% data processed by label-driven + manual validation, 35% by AI + manual validation |
| LCC | Land-cover Classification | AID, Capella Space, Google Earth, World Imagery | AID: 146, Capella Space: 22, Google Earth, World Imagery: 32 | 73% label-driven + manual validation, 27% purely manual extraction |
| IMR | Image Modality Recognition | AIR-SARship-1, AIR-SARship-2, Atlantic, C2Seg-BW, DMSP-OLS, SAR-Aircraft, TreeSatAI, Flood-3i | DMSP-OLS: 35, AIR-SARship-1, AIR-SARship-2, SAR-Aircraft: 35, Atlantic, C2Seg-BW, TreeSatAI: 35, Flood-3i | 100% manually processed and classified |
| IC | Image Captioning | AIRS, Capella Space, DIOR, DOTA, FAIR-CSAR, FuSAR-Ship, SARDet-100k, SATLAS, SRSDD, SRSDD-V1.0 | SATLAS, AIRS, DIOR, DOTA: 250, Capella Space, FAIR-CSAR, FuSAR-Ship, SARDet-100k, SRSDD, SRSDD-V1.0: 50 | 100% human-AI collaboration |
| VG | Visual Grounding | AIR-SARship-1, AIR-SARship-2, DIOR, DOTA, FAIR-CSAR, FIAR, FuSAR-Ship, SAR-Aircraft, SARDet-100k, ShipDataset, SRSDD, SRSDD-V1.0 | AIR-SARship-1, AIR-SARship-2, FAIR-CSAR, FIAR, FuSAR-Ship, SAR-Aircraft, SARDet-100k, ShipDataset, SRSDD, SRSDD-V1.0: 100, DIOR, DOTA: 800 | 100% label-driven + manually filtered high-quality data |
| REC | Referring Expression Comprehension | DIOR, FAIR-CSAR, FuSAR-Ship, SARDet-100k, SRSDD, SRSDD-V1.0 | FAIR-CSAR, FuSAR-Ship, SARDet-100k, SRSDD, SRSDD-V1.0: 50, DIOR: 399 | 100% label-driven + manually filtered high-quality data + designed referring language |
| OC | Object Counting | AIR-SARship-1, AIR-SARship-2, FIAR, SAR-Aircraft, ShipDataset, SODA | SODA: 500, AIR-SARship-1, AIR-SARship-2, FIAR, SAR-Aircraft, ShipDataset: 100 | 100% label-driven + manual validation |
| FCC | Fine-grained Category Classification | FAIR1M2.0, FGSC-23, JL-1, MAR20 | JL-1: 90, MAR20, FAIR1M2.0, FGSC-23: 275 | 75.3% label-driven + manual validation, 24.7% unique data manually verified |
| AR | Attribute Recognition | TGRS-HRRSD, WHU Building | TGRS-HRRSD, WHU Building: 300 | 100% manually filtered and manually constructed problem-answer pairs |
| RES | Referring Expression Segmentation | iSAID, LoveD, SOS, Flood-3i | iSAID, LoveD, Flood-3i: 300, SOS: 50 | 100% high-quality label filtered data + designed referring language |
| GRES | Generalized Referring Expression Segmentation | iSAID, LoveD | iSAID, LoveD: 255 | 100% high-quality label filtered data + designed referring language |
| CMS | Change Mask Segmentation | CD_Data_GZ, JL1-CD | CD_Data_GZ, JL1-CD: 200 | 100% high-quality label filtered data |

## II. Reasoning Tasks 12 items

| Task Abbreviation | Full Task Name Task | Corresponding Datasets | Number of Samples | Processing Method |
|---|---|---|---|---|
| SRR | Spatial Relationship Reasoning | TGRS-HRRSD | TGRS-HRRSD: 315 | 100% data manually filtered for high-quality labels + AI generated answers + manual validation |
| GM | Geometric Measurement | Flood-3i, WHU Building | Flood-3i: 100, WHU Building: 200 | 100% data manually filtered high-quality images + designed problem-answer pairs using GSD |
| FRL | Functional Region Localization | DIUx xView, EBD, WHU Building, xBD | DIUx xView, EBD, WHU Building, xBD: 172 | 100% manually filtered high-quality images + designed questions + manually obtained bounding boxes |
| CD | Change Description | CD_Data_GZ, EBD, JL1-CD, SECOND, xBD | CD_Data_GZ, EBD, JL1-CD, SECOND, xBD: 260 | 100% data manually filtered high-quality images + AI-generated answers + manual validation |
| DAR | Damage Assessment Reasoning | BRIGHT, EBD, JL-1, WHU Building, xBD | xBD, EBD: 200, BRIGHT: 141, WHU Building: 20, JL-1: 20 | 89.5% label-driven + manual validation, 10.5% manually selected + designed problem-answer pairs |
| LTR | Long-term Trend Reasoning | Google Earth, World Imagery | Google Earth, World Imagery: 533 | 100% data manually selected + AI-generated answers + manual validation |
| STR | Seasonal Temporal Reasoning | JL-1 | JL-1: 101 sets, 404 images | 100% manually validated data |
| GL | Geo-localization | Google Earth, World Imagery | Google Earth, World Imagery: 237 | 100% data manually selected + designed problem-answer pairs |
| DCI | Disaster Cause Inference | BRIGHT, EBD, xBD | BRIGHT, EBD, xBD: 525 images | 100% data manually filtered high-quality labels |
| GEU | Geo-Entity Understanding | Google Earth, World Imagery | Google Earth, World Imagery: 150 | 100% data manually selected + designed problem-answer pairs |
| CR | City Recognition | JL-1 | JL-1: 322 | 100% manually validated data |
| PS | Planning Suggestions | SATLAS | SATLAS: 220 | 100% data manually filtered high-quality images + manually designed routes |

## III. Robustness Tasks 4 items

| Task Abbreviation | Full Task Name Task | Corresponding Datasets | Number of Samples | Processing Method |
|---|---|---|---|---|
| ICA | Image Condition Assessment | DIUx xView, LEVIR, WHU Building, WHU Cloud | DIUx xView, LEVIR, WHU Building, WHU Cloud: 200 | 100% data manually filtered high-quality images + designed problem-answer pairs |
| DVQA | Degraded-condition VQA | SC, LCC, VG, REC, OC, FCC, AR seven tasks, 100 samples each | 700 | 100% data processed with AI-generated noise |
| HD | Hallucination Detection | DIUx xView, WHU Building, SATLAS | SATLAS, DIUx xView, WHU Building: 100 | 100% data manually filtered high-quality images + AI-generated answers + manual adjustments |
| SEC | Semantic Consistency | Capella Space | Capella Space: 300 sets, 1200 images | 100% data manually selected + designed problem-answer pairs |
