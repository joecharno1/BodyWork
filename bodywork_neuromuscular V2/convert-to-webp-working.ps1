# WebP Conversion Script using Official Google WebP Tools
# This script uses the cwebp.exe tool from the webp-tools directory

# Set the path to the WebP tools
$webpToolsPath = "webp-tools\libwebp-1.3.2-windows-x64\bin"
$cwebpPath = Join-Path $webpToolsPath "cwebp.exe"

# Check if the WebP tools exist
if (-not (Test-Path $cwebpPath)) {
    Write-Host "Error: WebP tools not found at $cwebpPath" -ForegroundColor Red
    Write-Host "Please make sure the webp-tools directory is properly extracted." -ForegroundColor Red
    Read-Host "Press Enter to exit..."
    exit
}

# Create webp-images directory if it doesn't exist
if (-not (Test-Path "webp-images")) {
    New-Item -ItemType Directory -Path "webp-images"
    Write-Host "Created webp-images directory" -ForegroundColor Green
}

# List of actual images in your project that need conversion
$images = @(
    "assets\IMG_0425.jpeg",
    "assets\IMG_0431.jpeg", 
    "assets\IMG_0443.jpeg",
    "assets\IMG_0463.jpeg"
)

Write-Host "Starting WebP conversion process..." -ForegroundColor Yellow
Write-Host "Found WebP tools at: $cwebpPath" -ForegroundColor Green

$convertedCount = 0
$skippedCount = 0

# Convert each image
foreach ($image in $images) {
    if (Test-Path $image) {
        # Extract just the filename and change extension
        $filename = [System.IO.Path]::GetFileNameWithoutExtension($image)
        $outputPath = "webp-images\$filename.webp"
        
        Write-Host "Converting $image to $outputPath..." -ForegroundColor Cyan
        
        try {
            # For JPEG files, use 85% quality
            & $cwebpPath -q 85 $image -o $outputPath
            
            if ($LASTEXITCODE -eq 0) {
                Write-Host "Successfully converted $image" -ForegroundColor Green
                $convertedCount++
                
                # Show file size comparison
                $originalSize = (Get-Item $image).Length
                $webpSize = (Get-Item $outputPath).Length
                $savings = [math]::Round((1 - ($webpSize / $originalSize)) * 100, 1)
                Write-Host "  Original: $([math]::Round($originalSize / 1MB, 2)) MB -> WebP: $([math]::Round($webpSize / 1MB, 2)) MB ($savings% smaller)" -ForegroundColor Gray
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

Write-Host ""
Write-Host "=== Conversion Summary ===" -ForegroundColor Yellow
Write-Host "Successfully converted: $convertedCount files" -ForegroundColor Green
Write-Host "Skipped (not found): $skippedCount files" -ForegroundColor Yellow
Write-Host ""
Write-Host "All conversions complete! Check the webp-images folder for the converted files." -ForegroundColor Green
Write-Host "Press Enter to exit..."
Read-Host 