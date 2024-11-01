#!/bin/bash

# Base directory
BASE_DIR="ResumeBuilder"

# Array of directories and files to create
declare -A structure=(
    ["$BASE_DIR/components"]="ResumeBuilder.tsx ResumeBuilder.css ResumeForm.tsx ResumeForm.css ResumePreview.tsx ResumePreview.css PersonalDetails.tsx PersonalDetails.css ExperienceSection.tsx ExperienceSection.css EducationSection.tsx EducationSection.css SkillsSection.tsx SkillsSection.css ReferencesSection.tsx ReferencesSection.css DownloadButton.tsx DownloadButton.css Header.tsx Header.css Footer.tsx Footer.css TemplateSelector.tsx TemplateSelector.css PrintButton.tsx PrintButton.css ExportButton.tsx ExportButton.css LoadingSpinner.tsx LoadingSpinner.css SummarySection.tsx SummarySection.css ProjectsSection.tsx ProjectsSection.css CertificationsSection.tsx CertificationsSection.css LanguageSkillsSection.tsx LanguageSkillsSection.css DeclarationSection.tsx DeclarationSection.css"
    ["$BASE_DIR/hooks"]="useResumeForm.ts useResumePreview.ts useDownloadResume.ts useLoading.ts"
    ["$BASE_DIR/services"]="resumeService.ts downloadService.ts templateService.ts"
    ["$BASE_DIR/types"]="resumeTypes.ts"
    ["$BASE_DIR/utils"]="validation.ts formatDate.ts exportUtils.ts"
    ["$BASE_DIR/constants"]="templates.ts"
    ["$BASE_DIR/assets/templates"]=""
    ["$BASE_DIR/assets/icons"]=""
    ["$BASE_DIR"]="ResumeBuilder.css index.ts"
)

# Create directories and files
for dir in "${!structure[@]}"; do
    if [ ! -d "$dir" ]; then
        mkdir -p "$dir"
        echo "Created directory: $dir"
    fi

    # Create files if they don't exist
    for file in ${structure[$dir]}; do
        if [ ! -f "$dir/$file" ]; then
            touch "$dir/$file"
            echo "Created file: $dir/$file"
        fi
    done
done

echo "ResumeBuilder structure created successfully."






ResumeBuilder/
├── components/
│   ├── ResumeBuilder.tsx                   # Main component for building resumes
│   ├── ResumeBuilder.css                    # CSS for the main ResumeBuilder component
│   ├── ResumeForm.tsx                       # Component for the resume form
│   ├── ResumeForm.css                        # CSS for ResumeForm component
│   ├── ResumePreview.tsx                     # Component for the resume preview
│   ├── ResumePreview.css                     # CSS for ResumePreview component
│   ├── PersonalDetails.tsx                  # Component for personal information input
│   ├── PersonalDetails.css                   # CSS for PersonalDetails component
│   ├── ExperienceSection.tsx                # Component for work experience input
│   ├── ExperienceSection.css                 # CSS for ExperienceSection component
│   ├── EducationSection.tsx                  # Component for education input
│   ├── EducationSection.css                  # CSS for EducationSection component
│   ├── SkillsSection.tsx                     # Component for skills input
│   ├── SkillsSection.css                     # CSS for SkillsSection component
│   ├── ReferencesSection.tsx                 # Component for references input
│   ├── ReferencesSection.css                 # CSS for ReferencesSection component
│   ├── DownloadButton.tsx                    # Button for downloading the resume
│   ├── DownloadButton.css                     # CSS for DownloadButton component
│   ├── Header.tsx                           # Header component for the resume
│   ├── Header.css                            # CSS for Header component
│   ├── Footer.tsx                           # Footer component for the resume
│   ├── Footer.css                            # CSS for Footer component
│   ├── TemplateSelector.tsx                 # Component to select resume templates
│   ├── TemplateSelector.css                  # CSS for TemplateSelector component
│   ├── PrintButton.tsx                      # Button for printing the resume
│   ├── PrintButton.css                       # CSS for PrintButton component
│   ├── ExportButton.tsx                     # Button for exporting the resume to various formats
│   ├── ExportButton.css                      # CSS for ExportButton component
│   ├── LoadingSpinner.tsx                    # Spinner component for loading states
│   ├── LoadingSpinner.css                    # CSS for LoadingSpinner component
│   ├── SummarySection.tsx                    # Component for a summary or objective statement
│   ├── SummarySection.css                    # CSS for SummarySection component
│   ├── ProjectsSection.tsx                   # Component for showcasing projects
│   ├── ProjectsSection.css                   # CSS for ProjectsSection component
│   ├── CertificationsSection.tsx             # Component for certifications input
│   ├── CertificationsSection.css             # CSS for CertificationsSection component
│   ├── LanguageSkillsSection.tsx             # Component for language skills input
│   ├── LanguageSkillsSection.css             # CSS for LanguageSkillsSection component
│   └── DeclarationSection.tsx                # Component for declaration input
│   └── DeclarationSection.css                # CSS for DeclarationSection component
├── hooks/
│   ├── useResumeForm.ts                      # Custom hook for form handling
│   ├── useResumePreview.ts                   # Custom hook for managing preview state
│   ├── useDownloadResume.ts                  # Custom hook for handling resume download
│   └── useLoading.ts                         # Custom hook for managing loading states
├── services/
│   ├── resumeService.ts                      # Service for handling resume data and API calls
│   ├── downloadService.ts                    # Service for handling download logic
│   └── templateService.ts                    # Service for fetching and managing resume templates
├── types/
│   ├── resumeTypes.ts                        # TypeScript types/interfaces for resume data
├── utils/
│   ├── validation.ts                         # Utility functions for form validation
│   ├── formatDate.ts                         # Utility function for formatting dates
│   └── exportUtils.ts                        # Utility functions for exporting the resume
├── constants/
│   ├── templates.ts                          # Constants for resume templates
├── assets/
│   ├── templates/                            # Folder for resume template images
│   └── icons/                                # Icons used in the app (download, print, etc.)
├── ResumeBuilder.css                         # Global CSS for the ResumeBuilder module
└── index.ts                                  # Entry point for the ResumeBuilder module
