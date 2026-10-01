Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\HP\.gemini\antigravity-ide\brain\0f2c8346-fd9a-4ed8-954c-fef16c101902\.user_uploaded\media_1790831956763.jpg"
$img = [System.Drawing.Bitmap]::FromFile($srcPath)
Write-Host "Original Dimensions: $($img.Width) x $($img.Height)"

$w = $img.Width
$h = $img.Height

# Find orange pixels (R > 160, G < 140, B < 80, R-B > 90)
$orangePixels = [System.Collections.Generic.List[System.Drawing.Point]]::new()

for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
        $c = $img.GetPixel($x, $y)
        if ($c.R -gt 150 -and $c.G -lt 140 -and $c.B -lt 90 -and ($c.R - $c.B) -gt 90) {
            $orangePixels.Add((New-Object System.Drawing.Point($x, $y)))
        }
    }
}

Write-Host "Found $($orangePixels.Count) orange border pixels"

$minX = $w; $maxX = 0; $minY = $h; $maxY = 0
foreach ($pt in $orangePixels) {
    if ($pt.X -lt $minX) { $minX = $pt.X }
    if ($pt.X -gt $maxX) { $maxX = $pt.X }
    if ($pt.Y -lt $minY) { $minY = $pt.Y }
    if ($pt.Y -gt $maxY) { $maxY = $pt.Y }
}

Write-Host "Orange Outer Ring Extents: Left=$minX, Right=$maxX, Top=$minY, Bottom=$maxY"
$centerX = ($minX + $maxX) / 2.0
$centerY = ($minY + $maxY) / 2.0
$diameterX = $maxX - $minX
$diameterY = $maxY - $minY
Write-Host "Calculated Center: ($centerX, $centerY), Diameter: ${diameterX}w x ${diameterY}h"

# The entire circular emblem is bounded by [minX, maxX, minY, maxY]
# Exact diameter is 450x445, center is (540, 279.5)
$radius = 225
$cropSize = 450
$cropX = [int]($centerX - $radius)
$cropY = [int]($centerY - $radius)

Write-Host "Exact Centered Crop: X=$cropX, Y=$cropY, Width=$cropSize, Height=$cropSize"

$cropRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropSize, $cropSize)
$croppedBmp = New-Object System.Drawing.Bitmap($cropSize, $cropSize)
$graphics = [System.Drawing.Graphics]::FromImage($croppedBmp)
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

$destRect = New-Object System.Drawing.Rectangle(0, 0, $cropSize, $cropSize)
$graphics.DrawImage($img, $destRect, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)

$img.Dispose()
$graphics.Dispose()

# Save
$croppedBmp.Save("C:\Users\HP\.gemini\antigravity-ide\scratch\v-cleaning-services\src\assets\logo.png", [System.Drawing.Imaging.ImageFormat]::Png)
$croppedBmp.Save("C:\Users\HP\.gemini\antigravity-ide\scratch\v-cleaning-services\public\logo.png", [System.Drawing.Imaging.ImageFormat]::Png)
if (Test-Path "C:\Users\HP\.gemini\antigravity-ide\scratch\v-cleaning-services\dist") {
    $croppedBmp.Save("C:\Users\HP\.gemini\antigravity-ide\scratch\v-cleaning-services\dist\logo.png", [System.Drawing.Imaging.ImageFormat]::Png)
}
$croppedBmp.Dispose()

Write-Host "Perfectly centered circular emblem cropped and saved!"
