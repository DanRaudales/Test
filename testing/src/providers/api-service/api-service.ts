import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiServiceProvider {

  places: any = [];

  constructor(public http: HttpClient) {

  }

  getPlaces() {

    console.log('Start map')

    /*this.http.get('http://192.168.0.8:3000/api/lugares').subscribe((res) =>{
      this.places = res;
      console.log(res);
      this.mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';

      this.mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

      this.grayscale   = Leaflet.tileLayer(this.mbUrl, {id: 'mapbox.light'}),
	  	this.streets  = Leaflet.tileLayer(this.mbUrl, {id: 'mapbox.streets'});

      this.map = Leaflet.map('map', {
        center: [19.395893, -99.092330],
        zoom: 12,
        maxZoom: 18,
        layers: [this.streets]
      });

      this.baseLayers = {
        "Streets": this.streets,
        "Grayscale": this.grayscale
      };

      Leaflet.control.layers(this.baseLayers).addTo(this.map)

      this.customControl = Leaflet.Control.extend({
        options: {
          position: 'topleft'
        },

        onAdd: function (map) {
          this.container = Leaflet.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');

          this.container.style.backgroundColor = 'white';
          this.container.style.backgroundImage = "url(assets/imgs/home-13.png)";
          this.container.style.backgroundRepeat = 'no-repeat';
          this.container.style.backgroundPosition = 'center';
          this.container.style.backgroundSize = "25px 25px";
          this. container.style.width = '34px';
          this.container.style.height = '34px';

          this.container.onclick = function(){
            map.setView([19.395893, -99.092330], 12);
          }
          return this.container;
        },
      });

      this.map.addControl(new this.customControl());

      this.places.forEach(ss => {
        //console.log(ss)
        //this.coo = Leaflet.polygon([ss.COORDENADAS.lat,ss.COORDENADAS.lng])
        let coor:any[] = [ss.COORDENADAS.lat,ss.COORDENADAS.lng];
        //console.log(coor);
        Leaflet.marker([coor[0],coor[1]]).bindPopup(ss.NOM_CORTO_PRESTATARIO).on('contextmenu', () => {
          this.details(ss);
        }).addTo(this.map);
      });

    },(error)=>{console.log(error)})*/

    this.places = [
      {"_id":"5c737142fc6f6f4a444d03c4","NOM_CORTO_PRESTATARIO":"PRESIDENCIA","NOM_LARGO_PRESTATARIO":"PRESIDENCIA DE LA REPUBLICA","DIRECCION":{"CALLE":"CONSTITUYENTES","NUM_EXT":"1001","NOM_COLONIA":"BELEN DE LAS FLORES","CP":"01110","NOM_MUNICIPIO":"ALVARO OBREGON","NOM_EDO":"DISTRITO FEDERAL","COORDENADAS":{"lat":19.3976519,"lng":-99.21595429999999,"tipo":"ROOFTOP"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"LIC.","NOMBRE_RESPONSABLE":"NANCY IVETTE","APATERNO_RESPONSABLE":"ALVARADO","AMATERNO_RESPONSABLE":"LOZANO","CARGO_RESPONSABLE":"RESPONSABLE DE SERVICIO SOCIAL Y COMUNICACION INTERNA"},"PROGRAMA_ACADEMICO":"Licenciatura en Ciencias de la Informática"},
      {"_id":"5c737142fc6f6f4a444d03c5","NOM_CORTO_PRESTATARIO":"INVEADF","NOM_LARGO_PRESTATARIO":"INSTITUTO DE VERIFICACIÓN ADMINISTRATIVA DEL DISTRITO FEDERAL","DIRECCION":{"CALLE":"CAROLINA","NUM_EXT":"132","NOM_COLONIA":"NOCHE BUENA","CP":"03720","NOM_MUNICIPIO":"BENITO JUÁREZ","NOM_EDO":"DISTRITO FEDERAL","COORDENADAS":{"lat":19.3811771,"lng":-99.1782032,"tipo":"ROOFTOP"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"M. en S.","NOMBRE_RESPONSABLE":"HERMES MAURICIO","APATERNO_RESPONSABLE":"AMADO","AMATERNO_RESPONSABLE":"PEÑA","CARGO_RESPONSABLE":"JEFE DE UNIDAD DEPARTAMENTAL DE CAPACITACIÓN, SERVICIO SOCIAL Y ESTÍMULOS LABORALES"},"PROGRAMA_ACADEMICO":"Ingeniería en Informática"},
      {"_id":"5c737142fc6f6f4a444d03c6","NOM_CORTO_PRESTATARIO":"CAPITAL 21","NOM_LARGO_PRESTATARIO":"SISTEMA DE RADIO Y TELEVISIÓN DIGITAL DEL GOBIERNO DEL DISTRITO FEDERAL","DIRECCION":{"CALLE":"NEZAHUALCÓYOTL","NUM_EXT":"120","NOM_COLONIA":"CENTRO","CP":"06080","NOM_MUNICIPIO":"CUAUHTÉMOC","NOM_EDO":"CIUDAD DE MÉXICO","COORDENADAS":{"lat":19.4257952,"lng":-99.1365354,"tipo":"ROOFTOP"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"C.","NOMBRE_RESPONSABLE":"JAIME MANUEL","APATERNO_RESPONSABLE":"HIGUERA","AMATERNO_RESPONSABLE":"PEREZ","CARGO_RESPONSABLE":"SUBDIRECTOR DE ADMINISTRACION"},"PROGRAMA_ACADEMICO":"Ingeniería en Transporte"},
      {"_id":"5c737142fc6f6f4a444d03c7","NOM_CORTO_PRESTATARIO":"A.Z.P.M.N.C.H. EN XOCHIMILCO, TLAHUAC Y MILPA ALTA","NOM_LARGO_PRESTATARIO":"AUTORIDAD DE LA ZONA PATRIMONIO MUNDIAL NATURAL Y CULTURAL DE LA HUMANIDAD EN XOCH. TLAUAC Y MILPA","DIRECCION":{"CALLE":"AV. SAN FERNANDO","NUM_EXT":"160","NOM_COLONIA":"TORIELLO","CP":"14000","NOM_MUNICIPIO":"TLALPAN","NOM_EDO":"D. F,","COORDENADAS":{"lat":19.2910453,"lng":-99.1638052,"tipo":"RANGE_INTERPOLATED"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"M. en A.","NOMBRE_RESPONSABLE":"GERARDO","APATERNO_RESPONSABLE":"MONTERO","AMATERNO_RESPONSABLE":"PALMA","CARGO_RESPONSABLE":"DIRECTOR DE ADMINISTRACIÓN"},"PROGRAMA_ACADEMICO":"Ingeniería Industrial"},
      {"_id":"5c737142fc6f6f4a444d03c8","NOM_CORTO_PRESTATARIO":"SECRETARIA DE CULTURA","NOM_LARGO_PRESTATARIO":"SECRETARIA DE CULTURA DEL GOBIERNO DEL DISTRITO FEDERAL","DIRECCION":{"CALLE":"AVENIDA PERIFERICO SUR","NUM_EXT":"5141","NOM_COLONIA":"ISIDRO FABELA","CP":"14030","NOM_MUNICIPIO":"TLALPAN","NOM_EDO":"DISTRITO FEDERAL","COORDENADAS":{"lat":19.3027932,"lng":-99.17865739999999,"tipo":"ROOFTOP"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"LIC.","NOMBRE_RESPONSABLE":"FRANCISCO JAVIER","APATERNO_RESPONSABLE":"FLORES","AMATERNO_RESPONSABLE":"LUNA","CARGO_RESPONSABLE":"DIRECTOR DE RECURSOS HUMANOS"},"PROGRAMA_ACADEMICO":"Licenciatura en Ciencias de la Informática"},
      {"_id":"5c737142fc6f6f4a444d03c9","NOM_CORTO_PRESTATARIO":"SOS","NOM_LARGO_PRESTATARIO":"SECRETARIA DE OBRAS Y SERVICIOS DEL GOBIERNO DEL DISTRITO FEDERAL","DIRECCION":{"CALLE":"PLAZA DE LA CONSTITUCIÓN","NUM_EXT":"1","NOM_COLONIA":"CENTRO HISTORICO","CP":"06068","NOM_MUNICIPIO":"CUAUHTEMOC","NOM_EDO":"DISTRITO FEDERAL","COORDENADAS":{"lat":19.4323903,"lng":-99.1342471,"tipo":"ROOFTOP"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"LIC.","NOMBRE_RESPONSABLE":"ALMA DELIA","APATERNO_RESPONSABLE":"SEGURA","AMATERNO_RESPONSABLE":"GODINEZ","CARGO_RESPONSABLE":"SUBDIRECTORA DE RELACIONES LABORALES Y CAPACITACIÓN"},"PROGRAMA_ACADEMICO":"Ingeniería en Informática"},
      {"_id":"5c737142fc6f6f4a444d03ca","NOM_CORTO_PRESTATARIO":"SECRETARIA DE CIENCIA,TECNOLOGÍA E INNOVACIÓN","NOM_LARGO_PRESTATARIO":"SECRETARIA DE CIENCIA,TECNOLOGÍA E INNOVACIÓN","DIRECCION":{"CALLE":"REPÚBLICA DE CHILE","NUM_EXT":"06","NOM_COLONIA":"CENTRO HISTÓRICO","CP":"06010","NOM_MUNICIPIO":"CUAUHTEMOC","NOM_EDO":"DISTRITO FEDERAL","COORDENADAS":{"lat":19.4357886,"lng":-99.1360919,"tipo":"RANGE_INTERPOLATED"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"ING.","NOMBRE_RESPONSABLE":"ALEJANDRO LEONEL","APATERNO_RESPONSABLE":"AMAYA","AMATERNO_RESPONSABLE":"AGUILAR","CARGO_RESPONSABLE":"JEFE DE UNIDAD DEPARTAMENTAL DE EVALUACIÓN"},"PROGRAMA_ACADEMICO":"Ingeniería en Transporte"},
      {"_id":"5c737142fc6f6f4a444d03cb","NOM_CORTO_PRESTATARIO":"SECRETARIA DE GOBIERNO","NOM_LARGO_PRESTATARIO":"SECRETARIA DE GOBIERNO DEL DISTRITO FEDERAL","DIRECCION":{"CALLE":"SAN ANTONIO ABAD","NUM_EXT":"122","NOM_COLONIA":"TRANSITO","CP":"06820","NOM_MUNICIPIO":"CUAUHTEMOC","NOM_EDO":"DISTRITO FEDERAL","COORDENADAS":{"lat":19.4168051,"lng":-99.1341976,"tipo":"ROOFTOP"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"C.","NOMBRE_RESPONSABLE":"JESUS JOEL","APATERNO_RESPONSABLE":"OLVERA","AMATERNO_RESPONSABLE":"FALCON","CARGO_RESPONSABLE":"DIRECTOR DE RECURSOS HUMANOS EN LA SECRETARIA DE GOBIERNO DEL D. F."},"PROGRAMA_ACADEMICO":"Ingeniería Industrial"},
      {"_id":"5c737142fc6f6f4a444d03cc","NOM_CORTO_PRESTATARIO":"A.G.U.","NOM_LARGO_PRESTATARIO":"AGENCIA DE GESTION  URBANA","DIRECCION":{"CALLE":"AV. RÍO CHURUBUSCO","NUM_EXT":"1155","NOM_COLONIA":"ZAPATA VELA","CP":"08040","NOM_MUNICIPIO":"IZTACALCO","NOM_EDO":"DISTRITO FEDERAL","COORDENADAS":{"lat":19.3815787,"lng":-99.10062920000001,"tipo":"RANGE_INTERPOLATED"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"LIC.","NOMBRE_RESPONSABLE":"JOSÉ LUIS","APATERNO_RESPONSABLE":"SEBASTIAN","AMATERNO_RESPONSABLE":"PÉREZ","CARGO_RESPONSABLE":"DIRECTOR DE RECURSOS HUMANOS"},"PROGRAMA_ACADEMICO":"Licenciatura en Ciencias de la Informática"},
      {"_id":"5c737142fc6f6f4a444d03cd","NOM_CORTO_PRESTATARIO":"SEMOVI-D.F.","NOM_LARGO_PRESTATARIO":"SECRETARIA DE MOVILIDAD EN EL DISTRITO FEDERAL","DIRECCION":{"CALLE":"AV. ALVARO OBREGON","NUM_EXT":"269","NOM_COLONIA":"ROMA","CP":"06700","NOM_MUNICIPIO":"CUAUHTEMOC","NOM_EDO":"DISTRITO FEDERAL","COORDENADAS":{"lat":19.4171104,"lng":-99.1671949,"tipo":"ROOFTOP"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"LIC.","NOMBRE_RESPONSABLE":"JUDITH G.","APATERNO_RESPONSABLE":"LOPEZ","AMATERNO_RESPONSABLE":"CORREA","CARGO_RESPONSABLE":"DIRECTORA DE RECURSOS HUMANOS"},"PROGRAMA_ACADEMICO":"Ingeniería en Informática"},
      {"_id":"5c737142fc6f6f4a444d03ce","NOM_CORTO_PRESTATARIO":"SECTURGDF","NOM_LARGO_PRESTATARIO":"SECRETARIA DEL TURISMO DEL GOBIERNO DEL D.F.","DIRECCION":{"CALLE":"AVENIDA NUEVO LEON","NUM_EXT":"56","NOM_COLONIA":"HIPODROMO","CP":"6100","NOM_MUNICIPIO":"CUAUHTEMOC","NOM_EDO":"DISTRITO FEDERAL","COORDENADAS":{"lat":19.4132831,"lng":-99.1714334,"tipo":"ROOFTOP"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"LIC.","NOMBRE_RESPONSABLE":"JOSÉ ANDRES","APATERNO_RESPONSABLE":"GONZÁLEZ","AMATERNO_RESPONSABLE":"MÉNDEZ","CARGO_RESPONSABLE":"SUBDIRECTORA DE RECURSOS HUMANOS"},"PROGRAMA_ACADEMICO":"Ingeniería en Transporte"},
      {"_id":"5c737142fc6f6f4a444d03d0","NOM_CORTO_PRESTATARIO":"SEDEREC","NOM_LARGO_PRESTATARIO":"SECRETARIA DE DESARROLLO RURAL Y EQUIDAD PARA LAS COMUNIDADES, GOBIERNO DEL DISTRITO FEDERAL","DIRECCION":{"CALLE":"ABRAHAM GONZÁLEZ","NUM_EXT":"67","NOM_COLONIA":"JUÁREZ","CP":"06600","NOM_MUNICIPIO":"CUAUHTEMOC","NOM_EDO":"DISTRITO FEDERAL","COORDENADAS":{"lat":19.4295918,"lng":-99.15383899999999,"tipo":"ROOFTOP"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"C.","NOMBRE_RESPONSABLE":"AMPARO","APATERNO_RESPONSABLE":"CASTRO","AMATERNO_RESPONSABLE":"CASTILLO","CARGO_RESPONSABLE":"SUBDIRECTORA DE RECURSOS HUMANOS"},"PROGRAMA_ACADEMICO":"Licenciatura en Ciencias de la Informática"},
      {"_id":"5c737142fc6f6f4a444d03d1","NOM_CORTO_PRESTATARIO":"DGECYFC","NOM_LARGO_PRESTATARIO":"DIRECCION GENERAL DE EMPLEO, CAPACITACION Y FOMENTO COOPERATIVO - LA STYFE - GDF","DIRECCION":{"CALLE":"IZAZAGA","NUM_EXT":"89","NOM_COLONIA":"CENTRO","CP":"06090","NOM_MUNICIPIO":"CUAUHTEMOC","NOM_EDO":"DISTRITO FEDERAL","COORDENADAS":{"lat":19.4257952,"lng":-99.1365354,"tipo":"ROOFTOP"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"LIC.","NOMBRE_RESPONSABLE":"GUADALUPE LIZET","APATERNO_RESPONSABLE":"MARTINEZ","AMATERNO_RESPONSABLE":"FIGUEROA","CARGO_RESPONSABLE":"JUD DE ENLACE ADMINISTRATIVO"},"PROGRAMA_ACADEMICO":"Ingeniería en Informática"},
      {"_id":"5c737142fc6f6f4a444d03d2","NOM_CORTO_PRESTATARIO":"D.G.C.O.T","NOM_LARGO_PRESTATARIO":"DIRECCIÓN GENERAL DE CONSTRUCCIÓN DE OBRAS PARA EL TRANSPORTE","DIRECCION":{"CALLE":"AV UNIVERSIDAD","NUM_EXT":"800","NOM_COLONIA":"SANTA CRUZ ATOYAC","CP":"03310","NOM_MUNICIPIO":"BENITO JUAREZ","NOM_EDO":"DISTRITO FEDERAL","COORDENADAS":{"lat":19.3710041,"lng":-99.1642411,"tipo":"ROOFTOP"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"LIC.","NOMBRE_RESPONSABLE":"ALMA DELIA","APATERNO_RESPONSABLE":"SEGURA","AMATERNO_RESPONSABLE":"GODINEZ","CARGO_RESPONSABLE":"JUD DE RELACIONES LABORALES Y CAPACITACION"},"PROGRAMA_ACADEMICO":"Ingeniería en Transporte"},
      {"_id":"5c737142fc6f6f4a444d03d3","NOM_CORTO_PRESTATARIO":"S.T.C.","NOM_LARGO_PRESTATARIO":"SISTEMA DE TRANSPORTE COLECTIVO","DIRECCION":{"CALLE":"DELICIAS","NUM_EXT":"67","NOM_COLONIA":"CENTRO","CP":"06070","NOM_MUNICIPIO":"CUAUHTÉMOC","NOM_EDO":"DISTRITO FEDERAL","COORDENADAS":{"lat":19.4283905,"lng":-99.1439505,"tipo":"ROOFTOP"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"LIC.","NOMBRE_RESPONSABLE":"SYLVIA ELENA","APATERNO_RESPONSABLE":"CAMACHO","AMATERNO_RESPONSABLE":"CEDANO","CARGO_RESPONSABLE":"COORDINADORA DE PRESTACIONES"},"PROGRAMA_ACADEMICO":"Ingeniería Industrial"},
      {"_id":"5c737142fc6f6f4a444d03d4","NOM_CORTO_PRESTATARIO":"STEDF","NOM_LARGO_PRESTATARIO":"SERVICIO DE TRANSPORTES ELECTRICOS DEL DISTRITO FEDERAL","DIRECCION":{"CALLE":"AV. MUNICIPIO LIBRE OTE.","NUM_EXT":"402","NOM_COLONIA":"SAN ANDRÈS TETEPILCO","CP":"09440","NOM_MUNICIPIO":"IZTAPALAPA","NOM_EDO":"DISTRITO FEDERAL","COORDENADAS":{"lat":19.3678252,"lng":-99.13331749999999,"tipo":"ROOFTOP"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"LIC.","NOMBRE_RESPONSABLE":"VERÓNICA","APATERNO_RESPONSABLE":"CASTILLO","AMATERNO_RESPONSABLE":"NÁJERA","CARGO_RESPONSABLE":"SUBGERENTE DE RECLUTAMIENTO Y CAPACITACIÓN"},"PROGRAMA_ACADEMICO":"Licenciatura en Ciencias de la Informática"},
      {"_id":"5c737142fc6f6f4a444d03d5","NOM_CORTO_PRESTATARIO":"SDSGDF","NOM_LARGO_PRESTATARIO":"SECRETARIA DE DESARROLLO SOCIAL DEL GDF","DIRECCION":{"CALLE":"PLAZA DE LA CONSTITUCION","NUM_EXT":"1","NOM_COLONIA":"CENTRO","CP":"06068","NOM_MUNICIPIO":"CUAUHTEMOC","NOM_EDO":"DISTRITO FEDERAL","COORDENADAS":{"lat":19.4323903,"lng":-99.1342471,"tipo":"ROOFTOP"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"MAESTRO","NOMBRE_RESPONSABLE":"ALEJANDRO","APATERNO_RESPONSABLE":"PIÑA","AMATERNO_RESPONSABLE":"MEDINA","CARGO_RESPONSABLE":"SECRETARIO DE DESARROLLO SOCIAL DE LA CIUDAD DE MEXICO"},"PROGRAMA_ACADEMICO":"Ingeniería en Informática"},
      {"_id":"5c737142fc6f6f4a444d03d6","NOM_CORTO_PRESTATARIO":"INDEPORTE","NOM_LARGO_PRESTATARIO":"INSTITUTO DEL DEPORTE DEL DISTRITO FEDERAL","DIRECCION":{"CALLE":"AV. >DIVISIÓN DEL NORTE","NUM_EXT":"2333","NOM_COLONIA":"GENERAL ANAYA","CP":"03340","NOM_MUNICIPIO":"BENITO JUAREZ","NOM_EDO":"CIUDAD DE MÉXICO","COORDENADAS":{"lat":19.3597034,"lng":-99.1544821,"tipo":"ROOFTOP"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"C.P.","NOMBRE_RESPONSABLE":"JUAN CARLOS","APATERNO_RESPONSABLE":"ESTRADA","AMATERNO_RESPONSABLE":"OLASCOAGA","CARGO_RESPONSABLE":"DIRECTOR DE ADMINISTRACIÓN EN EL INSTITUTO DEL DEPORTE DEL DISTRITO FEDERAL"},"PROGRAMA_ACADEMICO":"Ingeniería en Transporte"},
      {"_id":"5c737142fc6f6f4a444d03d7","NOM_CORTO_PRESTATARIO":"SECRETARIA DE FINANZAS DEL G.D.F.","NOM_LARGO_PRESTATARIO":"SECRETARIA DE FINANZAS DEL GOBIERNO DEL DISTRITO FEDERAL","DIRECCION":{"CALLE":"DR. LAVISTA","NUM_EXT":"144","NOM_COLONIA":"DOCTORES","CP":"06720","NOM_MUNICIPIO":"CUAUHTEMOC","NOM_EDO":"DISTRITO FEDERAL","COORDENADAS":{"lat":19.4233034,"lng":-99.15032860000001,"tipo":"ROOFTOP"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"C.P.","NOMBRE_RESPONSABLE":"MARTHA LETICIA","APATERNO_RESPONSABLE":"CORTES","AMATERNO_RESPONSABLE":"GENESTA","CARGO_RESPONSABLE":"DIRECTORA DE RECURSOS HUMANOS DE LA SECRETARÍA DE FINANZAS DE LA CDMX"},"PROGRAMA_ACADEMICO":"Ingeniería Industrial"},
      {"_id":"5c737142fc6f6f4a444d03d8","NOM_CORTO_PRESTATARIO":"SSPGDF","NOM_LARGO_PRESTATARIO":"SECRETARIA DE SEGURIDAD PUBLICA DEL GOBIERNO DEL DISTRITO FEDERAL","DIRECCION":{"CALLE":"JOSÉ MA. IZAZAGA","NUM_EXT":"89","NOM_COLONIA":"CENTRO","CP":"06090","NOM_MUNICIPIO":"CUAUHTÉMOC","NOM_EDO":"DISTRITO FEDERAL","COORDENADAS":{"lat":19.4257952,"lng":-99.1365354,"tipo":"ROOFTOP"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"LIC.","NOMBRE_RESPONSABLE":"JUAN","APATERNO_RESPONSABLE":"GARCÍA","AMATERNO_RESPONSABLE":"ARELLANO","CARGO_RESPONSABLE":"SUBDIRECTOR DE CONTROL Y CAPACITACIÓN  DE PERSONAL ADMINISTRATIVO"},"PROGRAMA_ACADEMICO":"Licenciatura en Ciencias de la Informática"},
      {"_id":"5c737142fc6f6f4a444d03d9","NOM_CORTO_PRESTATARIO":"DIRECCION GENERAL DE OBRAS PUBLICAS","NOM_LARGO_PRESTATARIO":"DIRECCION GENERAL DE OBRAS PUBLICAS DEL GOBIERNO DEL DISTRITO FEDERAL","DIRECCION":{"CALLE":"FCO. DEL PASO Y TRONCOSO","NUM_EXT":"499","NOM_COLONIA":"MAGDALENA MIXHUCA","CP":"15850","NOM_MUNICIPIO":"VENUSTIANO CARRANZA","NOM_EDO":"DISTRITO FEDERAL","COORDENADAS":{"lat":19.4105657,"lng":-99.1133236,"tipo":"ROOFTOP"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"LIC.","NOMBRE_RESPONSABLE":"ALMA DELIA","APATERNO_RESPONSABLE":"SEGURA","AMATERNO_RESPONSABLE":"GODÍNEZ","CARGO_RESPONSABLE":"J.U.D. DE RELACIONES LABORALES Y CAPACITACIÓN"},"PROGRAMA_ACADEMICO":"Ingeniería en Informática"},
      {"_id":"5c737142fc6f6f4a444d03da","NOM_CORTO_PRESTATARIO":"SMA DEL GFD","NOM_LARGO_PRESTATARIO":"SECRETARIA DEL MEDIO AMBIENTE DEL GOBIERNO DEL DISTRITO FEDERAL","DIRECCION":{"CALLE":"PLAZA DE LA CONSTITUCIÓN","NUM_EXT":"NO. 1","NOM_COLONIA":"CENTRO","CP":"06068","NOM_MUNICIPIO":"CUAUHTÉMOC","NOM_EDO":"DISTRITO FEDERAL","COORDENADAS":{"lat":19.4323903,"lng":-99.1342471,"tipo":"ROOFTOP"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"C.","NOMBRE_RESPONSABLE":"LETICIA","APATERNO_RESPONSABLE":"SILVA","AMATERNO_RESPONSABLE":"CANAÁN","CARGO_RESPONSABLE":"J.U.D. DE PLANEACIÓN EMPLEO Y REGISTRO DE PERSONAL"},"PROGRAMA_ACADEMICO":"Ingeniería en Transporte"},
      {"_id":"5c737142fc6f6f4a444d03db","NOM_CORTO_PRESTATARIO":"S.A.C.M.","NOM_LARGO_PRESTATARIO":"SISTEMA DE AGUAS DE LA CIUDAD DE MEXICO","DIRECCION":{"CALLE":"NEZAHUALCOYOTL","NUM_EXT":"109","NOM_COLONIA":"CENTRO","CP":"06080","NOM_MUNICIPIO":"CUAUHTÉMOC","NOM_EDO":"DISTRITO FEDERAL","COORDENADAS":{"lat":19.4250719,"lng":-99.1371839,"tipo":"ROOFTOP"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"LIC.","NOMBRE_RESPONSABLE":"MARÍA DEL CARMEN","APATERNO_RESPONSABLE":"HERNÁNDEZ","AMATERNO_RESPONSABLE":"ROMERO","CARGO_RESPONSABLE":"J.U.D. DE CAPACITACIÓN"},"PROGRAMA_ACADEMICO":"Ingeniería Industrial"},
      {"_id":"5c737142fc6f6f4a444d03dc","NOM_CORTO_PRESTATARIO":"OFICIALIA MAYOR DEL G.D.F.","NOM_LARGO_PRESTATARIO":"OFICIALIA MAYOR DEL GOBIERNO DEL DISTRITO FEDERAL","DIRECCION":{"CALLE":"PLAZA DE LA CONSTITUCIÓN, PRIMER PISO","NUM_EXT":"1","NOM_COLONIA":"CENTRO","CP":"06068","NOM_MUNICIPIO":"CUAHUTÉMOC","NOM_EDO":"DISTRITO FEDERAL","COORDENADAS":{"lat":19.4326018,"lng":-99.1332049,"tipo":"APPROXIMATE"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"C.","NOMBRE_RESPONSABLE":"SONIA LAURA","APATERNO_RESPONSABLE":"ZEPEDA","AMATERNO_RESPONSABLE":"ESTRADA","CARGO_RESPONSABLE":"DIRECTORA DE RECURSOS HUMANOS"},"PROGRAMA_ACADEMICO":"Licenciatura en Ciencias de la Informática"},
      {"_id":"5c737142fc6f6f4a444d03dd","NOM_CORTO_PRESTATARIO":"DAO","NOM_LARGO_PRESTATARIO":"DELEGACION ALVARO OBREGON","DIRECCION":{"CALLE":"CANARIO ESQ. CALLE 10","NUM_EXT":"S/N","NOM_COLONIA":"TOLTECA","CP":"01150","NOM_MUNICIPIO":"DELEGACION ALVARO OBREGON","NOM_EDO":"DISTRITO FEDERAL","COORDENADAS":{"lat":19.3899686,"lng":-99.194457,"tipo":"GEOMETRIC_CENTER"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"C.","NOMBRE_RESPONSABLE":"LORENZO SAMUEL","APATERNO_RESPONSABLE":"MOLLINEDO","AMATERNO_RESPONSABLE":"BASTAR","CARGO_RESPONSABLE":"DIRECTOR DE RECURSOS HUMANOS"},"PROGRAMA_ACADEMICO":"Ingeniería en Informática"},
      {"_id":"5c737142fc6f6f4a444d03dc","NOM_CORTO_PRESTATARIO":"OFICIALIA MAYOR DEL G.D.F.","NOM_LARGO_PRESTATARIO":"OFICIALIA MAYOR DEL GOBIERNO DEL DISTRITO FEDERAL","DIRECCION":{"CALLE":"PLAZA DE LA CONSTITUCIÓN, PRIMER PISO","NUM_EXT":"1","NOM_COLONIA":"CENTRO","CP":"06068","NOM_MUNICIPIO":"CUAHUTÉMOC","NOM_EDO":"DISTRITO FEDERAL","COORDENADAS":{"lat":19.4326018,"lng":-99.1332049,"tipo":"APPROXIMATE"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"C.","NOMBRE_RESPONSABLE":"SONIA LAURA","APATERNO_RESPONSABLE":"ZEPEDA","AMATERNO_RESPONSABLE":"ESTRADA","CARGO_RESPONSABLE":"DIRECTORA DE RECURSOS HUMANOS"},"PROGRAMA_ACADEMICO":"Licenciatura en Ciencias de la Informática"},
      {"_id":"5c737142fc6f6f4a444d03dd","NOM_CORTO_PRESTATARIO":"DAO","NOM_LARGO_PRESTATARIO":"DELEGACION ALVARO OBREGON","DIRECCION":{"CALLE":"CANARIO ESQ. CALLE 10","NUM_EXT":"S/N","NOM_COLONIA":"TOLTECA","CP":"01150","NOM_MUNICIPIO":"DELEGACION ALVARO OBREGON","NOM_EDO":"DISTRITO FEDERAL","COORDENADAS":{"lat":19.3899686,"lng":-99.194457,"tipo":"GEOMETRIC_CENTER"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"C.","NOMBRE_RESPONSABLE":"LORENZO SAMUEL","APATERNO_RESPONSABLE":"MOLLINEDO","AMATERNO_RESPONSABLE":"BASTAR","CARGO_RESPONSABLE":"DIRECTOR DE RECURSOS HUMANOS"},"PROGRAMA_ACADEMICO":"Ingeniería en Informática"},
      {"_id":"5c737142fc6f6f4a444d03de","NOM_CORTO_PRESTATARIO":"AZCAPOTZALCO","NOM_LARGO_PRESTATARIO":"DELEGACION AZCAPOTZALCO","DIRECCION":{"CALLE":"CASTILLA ORIENTE","NUM_EXT":"S/N","NOM_COLONIA":"AZCAPOTZALCO","CP":"02008","NOM_MUNICIPIO":"AZCAPOTZALCO","NOM_EDO":"DISTRITO FEDERAL","COORDENADAS":{"lat":19.484563,"lng":-99.1854614,"tipo":"GEOMETRIC_CENTER"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"MAESTRA","NOMBRE_RESPONSABLE":"G. ANGELICA","APATERNO_RESPONSABLE":"SANTA ANA","AMATERNO_RESPONSABLE":"CHAVEZ","CARGO_RESPONSABLE":"DIRECTORA DE RECURSOS HUMANOS DELEGACIÓN AZCAPOTZALCO"},"PROGRAMA_ACADEMICO":"Ingeniería en Transporte"},
      {"_id":"5c737142fc6f6f4a444d03df","NOM_CORTO_PRESTATARIO":"D.B.J.","NOM_LARGO_PRESTATARIO":"DELEGACION BENITO JUAREZ","DIRECCION":{"CALLE":"AV CUAUHTEMOC","NUM_EXT":"1240","NOM_COLONIA":"SANTA CRUZ ATOYAC","CP":"03310","NOM_MUNICIPIO":"BENITO JUAREZ","NOM_EDO":"DISTRITO FEDERAL","COORDENADAS":{"lat":19.372091,"lng":-99.16061409999999,"tipo":"ROOFTOP"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"C.","NOMBRE_RESPONSABLE":"GUILLERMO","APATERNO_RESPONSABLE":"TORRES","AMATERNO_RESPONSABLE":"PEREZ","CARGO_RESPONSABLE":"SUBDIRECTOR DE RECURSOS HUMANOS"},"PROGRAMA_ACADEMICO":"Ingeniería Industrial"},
      {"_id":"5c737142fc6f6f4a444d03e0","NOM_CORTO_PRESTATARIO":"DELEGACION COYOACAN","NOM_LARGO_PRESTATARIO":"GOBIERNO DEL DISTRITO FEDERAL, DELEGACION COYOACAN","DIRECCION":{"CALLE":"CABALLOCALCO","NUM_EXT":"22","NOM_COLONIA":"BARRIO DE LA CONCEPCION","CP":"04020","NOM_MUNICIPIO":"COYOCÀN","NOM_EDO":"DISTRITO FEDERAL","COORDENADAS":{"lat":19.3484845,"lng":-99.1618369,"tipo":"ROOFTOP"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"C.","NOMBRE_RESPONSABLE":"DULCE GRACIELA","APATERNO_RESPONSABLE":"GARCIA","AMATERNO_RESPONSABLE":"BARRERA","CARGO_RESPONSABLE":"JEFE DE LA UNIDAD DEPARTAMENTAL DE RELACIONES LABORALES Y CAPACITACIÓN"},"PROGRAMA_ACADEMICO":"Licenciatura en Ciencias de la Informática"},
      {"_id":"5c737142fc6f6f4a444d03e1","NOM_CORTO_PRESTATARIO":"CUAJIMALPA","NOM_LARGO_PRESTATARIO":"DELEGACION CUAJIMALPA DE MORELOS","DIRECCION":{"CALLE":"AV. JUAREZ","NUM_EXT":"S/N","NOM_COLONIA":"CUAJIMALPA CENTRO","CP":"5000","NOM_MUNICIPIO":"CUAJIMALPA DE MORELOS","NOM_EDO":"DISTRITO FEDERAL","COORDENADAS":{"lat":19.3565799,"lng":-99.2981286,"tipo":"GEOMETRIC_CENTER"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"C.","NOMBRE_RESPONSABLE":"ESPERANZA","APATERNO_RESPONSABLE":"CHAPARRO","AMATERNO_RESPONSABLE":"GUTIERREZ","CARGO_RESPONSABLE":"JEFA DE OFICINA DE SERVICIO SOCIAL"},"PROGRAMA_ACADEMICO":"Ingeniería en Informática"},
      {"_id":"5c737142fc6f6f4a444d03e2","NOM_CORTO_PRESTATARIO":"DELEGACION CUAHTEMOC","NOM_LARGO_PRESTATARIO":"GOBIERNO DEL DISTRITO FEDERAL, DELEGACION CUAUHTEMOC","DIRECCION":{"CALLE":"ALDAMA Y MINA","NUM_EXT":"S/N","NOM_COLONIA":"BUENAVISTA","CP":"06350","NOM_MUNICIPIO":"CUAUHTEMOC","NOM_EDO":"DISTRITO FEDERAL","COORDENADAS":{"lat":19.4405644,"lng":-99.15155539999999,"tipo":"GEOMETRIC_CENTER"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"C.","NOMBRE_RESPONSABLE":"MARCO ANTONIO","APATERNO_RESPONSABLE":"RAMÍREZ BUENDÍA","AMATERNO_RESPONSABLE":"GRAJALES","CARGO_RESPONSABLE":"SUBDIRECTOR DE ASUNTOS LABORALES Y DESARROLLO DE PERSONAL"},"PROGRAMA_ACADEMICO":"Ingeniería en Transporte"},
      {"_id":"5c737142fc6f6f4a444d03e3","NOM_CORTO_PRESTATARIO":"DELEGACION GUSTAVO A. MADERO","NOM_LARGO_PRESTATARIO":"GOBIERNO DEL DISTRITO FEDERAL, DELEGACION GUSTAVO A. MADERO","DIRECCION":{"CALLE":"AV, 5 DE FEBRERO","NUM_EXT":"S/N","NOM_COLONIA":"VILLA  GUSTAVO A. MADERO","CP":"07050","NOM_MUNICIPIO":"GUSTAVO. A. MADERO","NOM_EDO":"DISTRITO FEDERAL","COORDENADAS":{"lat":19.4813298,"lng":-99.1147696,"tipo":"GEOMETRIC_CENTER"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"LIC.","NOMBRE_RESPONSABLE":"MIGUEL ÁNGEL","APATERNO_RESPONSABLE":"GARCÍA","AMATERNO_RESPONSABLE":"SILVA","CARGO_RESPONSABLE":"DIRECTORA GENERAL DE ADMINISTRACION DE LA DELEGACION GUSTAVO A. MADERO"},"PROGRAMA_ACADEMICO":"Ingeniería Industrial"},
      {"_id":"5c737142fc6f6f4a444d03e4","NOM_CORTO_PRESTATARIO":"IZTACALCO","NOM_LARGO_PRESTATARIO":"DELEGACION IZTACALCO","DIRECCION":{"CALLE":"PLAZA BENITO JUAREZ","NUM_EXT":"S/N","NOM_COLONIA":"GABRIEL RAMOS MILLAN","CP":"08000","NOM_MUNICIPIO":"IZTACALCO","NOM_EDO":"DISTRITO FEDERAL","COORDENADAS":{"lat":19.3948108,"lng":-99.0970371,"tipo":"GEOMETRIC_CENTER"}},"RESPONSABLE":{"NOM_TRATAMIENTO_RESPONSABLE":"C.","NOMBRE_RESPONSABLE":"ALFREDO","APATERNO_RESPONSABLE":"HERNANDEZ","AMATERNO_RESPONSABLE":"LOPEZ","CARGO_RESPONSABLE":"JEFE DE LA UNIDAD DEPARTAMENTAL DE CAPACITACIÓN"},"PROGRAMA_ACADEMICO":"Licenciatura en Ciencias de la Informática"}
      ,

    ];

    return this.places

  }

  // Función para hacer el filtrado de lugares
  filterData(term) {
    // Generar el array de todos los lugares
    let array = this.getPlaces();
    console.log('Filtrar por: ' + term)
    console.log(array)
    return array.filter((item) => {
      return item.PROGRAMA_ACADEMICO.toLowerCase().indexOf(
        term.toLowerCase()) > -1;
    });

  }

  /*// Función para llamar el pipe de filtrado de datos
  filterItems(searchTerm){

    return this.apiService.places.filter((item) => {
        return item.PROGRAMA.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }*/

}
