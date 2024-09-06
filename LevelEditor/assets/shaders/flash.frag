uniform sampler2D texture;

void main() {
	vec4 pixel = texture2D(texture, gl_TexCoord[0].xy);
	if (pixel.a == 0.0) {
		gl_FragColor = pixel;
	} else {
		gl_FragColor = vec4(pixel.r + (64.0 / 255.0), pixel.g + (64.0 / 255.0), pixel.b + (64.0 / 255.0), pixel.a);
	}
}