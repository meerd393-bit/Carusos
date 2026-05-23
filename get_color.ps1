Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("c:\Users\IT\Desktop\Carusos\logo.jpg")
$bmp = New-Object System.Drawing.Bitmap($img)
$color = $bmp.GetPixel(10, 10)
$hex = "#{0:X2}{1:X2}{2:X2}" -f $color.R, $color.G, $color.B
Write-Output "RGB: $($color.R), $($color.G), $($color.B)"
Write-Output "HEX: $hex"
$bmp.Dispose()
$img.Dispose()
