# WebP Conversion Script for Bodywork NeuroMuscular Images
# This script uses the cwebp.exe tool from the webp-tools directory

# Set the path to the WebP tools
$webpToolsPath = "webp-tools\libwebp-1.3.2-windows-x64\bin"
$cwebpPath = Join-Path $webpToolsPath "cwebp.exe"

# Check if the WebP tools exist
if (-not (Test-Path $cwebpPath)) {
    Write-Host "Error: WebP tools not found at $cwebpPath" -ForegroundColor Red
    Write-Host "Please download WebP tools from: https://developers.google.com/speed/webp/download" -ForegroundColor Yellow
    Write-Host "Extract to webp-tools directory in the project root." -ForegroundColor Yellow
    Read-Host "Press Enter to exit..."
    exit
}

# Change to assets directory
Set-Location "assets"

# List of images to convert
$images = @(
    "IMG_0443.jpeg",
    "IMG_0463.jpeg", 
    "IMG_0431.jpeg",
    "IMG_0425.jpeg"
)

Write-Host "Starting WebP conversion process for Bodywork NeuroMuscular images..." -ForegroundColor Yellow
Write-Host "Found WebP tools at: $cwebpPath" -ForegroundColor Green

$convertedCount = 0
$skippedCount = 0

# Convert each image
foreach ($image in $images) {
    if (Test-Path $image) {
        $outputPath = $image -replace '\.jpeg$', '.webp'
        
        Write-Host "Converting $image to $outputPath..." -ForegroundColor Cyan
        
        try {
            # For JPEG files, use 85% quality
            & $cwebpPath -q 85 $image -o $outputPath
            
            if ($LASTEXITCODE -eq 0) {
                Write-Host "Successfully converted $image" -ForegroundColor Green
                $convertedCount++
                
                # Get file sizes for comparison
                $originalSize = (Get-Item $image).Length
                $webpSize = (Get-Item $outputPath).Length
                $savings = [math]::Round((($originalSize - $webpSize) / $originalSize) * 100, 1)
                $originalMB = [math]::Round($originalSize/1MB, 1)
                $webpMB = [math]::Round($webpSize/1MB, 1)
                Write-Host "  Size reduction: $savings% ($originalMB MB -> $webpMB MB)" -ForegroundColor Green
            } else {
                Write-Host "Failed to convert $image" -ForegroundColor Red
            }
        }
        catch {
            Write-Host "Error converting $image" -ForegroundColor Red
        }
    } else {
        Write-Host "Warning: $image not found" -ForegroundColor Yellow
        $skippedCount++
    }
}

# Return to project root
Set-Location ".."

Write-Host ""
Write-Host "=== Conversion Summary ===" -ForegroundColor Yellow
Write-Host "Successfully converted: $convertedCount files" -ForegroundColor Green
Write-Host "Skipped (not found): $skippedCount files" -ForegroundColor Yellow
Write-Host ""
Write-Host "All conversions complete! WebP files created in assets folder." -ForegroundColor Green
Write-Host "Press Enter to continue..."
Read-Host 