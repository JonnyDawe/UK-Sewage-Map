# Sewage Map - Change log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [2.0.0] - Unreleased

### Added
- Added a changelog file
- Refactored the codebase to use tanstack. I noticed that NextJS was not working well with the ArcGIS API making development difficult and slow. This may be something to look into in the future, perhaps with an issue in the NextJS GitHub repository.
- Added UK wide coverage to reflect the latest available discharge data.

### Removed
- Removed NextJS.
- Dynamic OG images. This was a feature that relied on next/image and was not quite working as expected. For example caching meant that the images were not regularly updated to match the latest data. I have removed this feature for now.

## [1.0.0] - 2024

### Note
The first releases of the Sewage Map did not include tracking of changes to the codebase
