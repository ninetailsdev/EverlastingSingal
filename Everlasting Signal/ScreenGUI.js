var customGuiSkin : GUISkin;
var freqSkin : GUISkin;

var frequencySlider : float = 0.0;
var heightSlider : float = 0.0;
var powerButtonTex : Texture2D;
var powerButtonValue : int = 0.0;
var baseScore : int = 0;

var SineWave : GameObject;

function OnGUI () {
	GUI.skin = customGuiSkin;
	heightSlider = new GUI.VerticalScrollbar(Rect(Screen.width*0.075, Screen.height * 0.0714,50,Screen.height* 0.8576), heightSlider, 0.5, 6, -3);
	
	if(GUI.Button(Rect((Screen.width*0.925)-45,(Screen.height * 0.0714)-40, 100, 100), powerButtonTex)){
		UsePowerUp(powerButtonValue);
	}
	
	GUI.Label(Rect(Screen.width * 0.2, Screen.height * 0.075, 100,50),"SCORE: " + baseScore);
	
	GUI.Label(Rect(Screen.width * 0.055, Screen.height * 0.023, 100,50),"Height");
	GUI.Label(Rect(Screen.width * 0.87, Screen.height * 0.15, 100,50),"Frequency");
	GUI.Label(Rect(Screen.width * 0.89, Screen.height * 0.005, 100,50),"Power Up");
	
	
	GUI.skin = freqSkin;
	frequencySlider = new GUI.VerticalScrollbar(Rect(Screen.width * 0.925, Screen.height * 0.2142, 50, Screen.height*0.7148), frequencySlider, 5, 70, 5);
}

function Update(){
	SineWave.GetComponent(waveHeight).SetFrequency(frequencySlider);
	SineWave.GetComponent(waveHeight).SetHeight(heightSlider);
		
	switch(powerButtonValue){
		case 0:
			powerButtonTex = Resources.Load("dial/OverloadDialPos0");
			break;
		case 1:
			powerButtonTex = Resources.Load("dial/OverloadDialPos1");
			break;
		case 2:
			powerButtonTex = Resources.Load("dial/OverloadDialPos2");
			break;
		case 3:
			powerButtonTex = Resources.Load("dial/OverloadDialPos3");
			break;	
	}
	
	heightSlider += Input.GetAxis("Vertical")*0.2;
	frequencySlider += Input.GetAxis("Horizontal") * 1.8f;
	if(Input.GetButtonDown("Fire1")){
		UsePowerUp(powerButtonValue);
	}
}

function UsePowerUp(value : int){
	Debug.Log("Used power up level " + value);
	powerButtonValue = 0;
}

function AddScore(score : int){
	baseScore += score;
}