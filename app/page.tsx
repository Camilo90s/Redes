import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Network, Globe, Shield, History, Settings, Users, Zap, Lock } from "lucide-react"

export default function RedesDocumentacion() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Network className="h-8 w-8" />
            <h1 className="text-4xl font-bold text-balance">Redes</h1>
          </div>
          <p className="text-xl text-primary-foreground/90 text-pretty max-w-3xl">
            Introducción a Redes - Documentación completa sobre redes informáticas, protocolos, historia de Internet y
            seguridad
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-card border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2">
            <Button variant="ghost" size="sm" className="text-sm">
              <Network className="h-4 w-4 mr-2" />
              Introducción
            </Button>
            <Button variant="ghost" size="sm" className="text-sm">
              <Zap className="h-4 w-4 mr-2" />
              Protocolos
            </Button>
            <Button variant="ghost" size="sm" className="text-sm">
              <History className="h-4 w-4 mr-2" />
              Historia
            </Button>
            <Button variant="ghost" size="sm" className="text-sm">
              <Settings className="h-4 w-4 mr-2" />
              Clasificación
            </Button>
            <Button variant="ghost" size="sm" className="text-sm">
              <Users className="h-4 w-4 mr-2" />
              Sistemas Distribuidos
            </Button>
            <Button variant="ghost" size="sm" className="text-sm">
              <Globe className="h-4 w-4 mr-2" />
              Evolución Web
            </Button>
            <Button variant="ghost" size="sm" className="text-sm">
              <Shield className="h-4 w-4 mr-2" />
              Seguridad
            </Button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Introducción */}
        <section id="introduccion" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Network className="h-6 w-6 text-accent" />
                Introducción a Redes
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                Las redes informáticas son el esqueleto de la tecnología moderna. En su forma más simple, una red es un
                conjunto de dos o más dispositivos que están conectados para compartir recursos, intercambiar archivos o
                permitir la comunicación. En la actualidad, el alcance de las redes ha explotado, abarcando desde las
                redes domésticas hasta la infraestructura masiva de la computación en la nube (cloud computing) y el
                Internet de las Cosas IoT, donde miles de millones de dispositivos se conectan entre sí.
              </p>
              <p className="leading-relaxed">
                El estudio de las redes no solo se centra en la infraestructura física, sino también en las reglas y
                protocolos que permiten que esta comunicación fluya de manera ordenada y eficiente. Este documento te
                guiará a través de los conceptos fundamentales, desde la historia de Internet hasta la clasificación de
                redes y los modelos de sistemas distribuidos.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Elementos de la Comunicación */}
        <section id="elementos-comunicacion" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Elementos de la Comunicación</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed mb-6">
                En cualquier sistema de comunicación, existen elementos clave que deben interactuar para que un mensaje
                sea transmitido y comprendido. En el contexto de las redes, estos elementos son la base para entender
                cómo los datos viajan de un punto a otro. Los elementos principales son:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Emisor:</h4>
                    <p className="text-sm">
                      El dispositivo que origina el mensaje (ej. tu computadora al enviar un correo electrónico).
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Receptor:</h4>
                    <p className="text-sm">
                      El dispositivo que recibe el mensaje (ej. el servidor de correo del destinatario).
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Mensaje:</h4>
                    <p className="text-sm">La información que se va a transmitir (ej. el contenido de tu correo).</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Medio:</h4>
                    <p className="text-sm">
                      El canal físico o inalámbrico por el que viaja el mensaje (ej. cables de fibra óptica, ondas de
                      radio).
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Ruido:</h4>
                    <p className="text-sm">
                      Cualquier interferencia que puede distorsionar o corromper el mensaje durante la transmisión (ej.
                      interferencia eléctrica en un cable).
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Código:</h4>
                    <p className="text-sm">
                      Es el lenguaje en que se transmite la información. En redes, puede ser código binario 0 y 1 o
                      estándares de codificación como ASCII y UTF8.
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Protocolo:</h4>
                    <p className="text-sm">
                      Son las normas que garantizan que la comunicación sea posible. Sin un protocolo común, dos
                      dispositivos no se entienden aunque estén conectados.
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Retroalimentación ACK:</h4>
                    <p className="text-sm">
                      En muchos protocolos, el receptor envía confirmaciones (ACKs) para informar que recibió la
                      información correctamente.
                    </p>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="bg-accent/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Transmisión vs. Comunicación</h3>
                <p className="leading-relaxed mb-4">
                  Es importante diferenciar estos dos conceptos. La <strong>transmisión</strong> es simplemente el acto
                  de enviar datos de un punto a otro. El éxito de la transmisión se mide por si los datos llegaron a su
                  destino, sin importar si fueron comprendidos o no. Por ejemplo, una computadora puede transmitir un
                  archivo corrupto; la transmisión fue exitosa pero no hubo comunicación efectiva.
                </p>
                <p className="leading-relaxed">
                  La <strong>comunicación</strong>, por otro lado, implica que el mensaje no solo fue transmitido, sino
                  que también fue recibido y entendido correctamente por el receptor. El proceso de comunicación es
                  completo cuando hay una confirmación o una respuesta que indica que el mensaje ha sido interpretado.
                  Los protocolos de red se encargan de asegurar que la comunicación, no solo la transmisión, sea
                  exitosa.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Protocolos de Comunicación */}
        <section id="protocolos" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Zap className="h-6 w-6 text-accent" />
                Protocolos de Comunicación
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed mb-6">
                Un protocolo es un conjunto de reglas que definen cómo se formatean, transmiten y reciben los datos en
                una red. Sin protocolos, los dispositivos no podrían entenderse entre sí. Son el "idioma" que utilizan
                las computadoras para hablar. Su función principal es garantizar la interoperabilidad y la comunicación
                exitosa entre sistemas heterogéneos.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4">El pilar de Internet: TCP/IP</h3>
                <p className="leading-relaxed mb-4">
                  El conjunto de protocolos más importante es TCP/IP. Piensa en ellos como un equipo de dos.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-background rounded-lg border">
                    <h4 className="font-semibold mb-2">TCP (Protocolo de Control de Transmisión):</h4>
                    <p className="text-sm leading-relaxed">
                      Se encarga de la fiabilidad. Si envías un archivo grande, TCP lo divide en pequeños paquetes, los
                      numera y se asegura de que todos lleguen a su destino en el orden correcto. Si un paquete se
                      pierde, TCP pide al emisor que lo reenvíe. Es como un servicio postal con acuse de recibo.
                    </p>
                  </div>
                  <div className="p-4 bg-background rounded-lg border">
                    <h4 className="font-semibold mb-2">IP (Protocolo de Internet):</h4>
                    <p className="text-sm leading-relaxed">
                      Se encarga del direccionamiento. IP asigna una dirección única (la dirección IP) a cada
                      dispositivo en la red y se asegura de que los paquetes de datos sean dirigidos al destino
                      correcto. Es como el sistema de direcciones de la ciudad.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">Otros Protocolos Importantes</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-muted rounded-lg">
                  <Badge variant="secondary" className="mb-2">
                    HTTP/HTTPS
                  </Badge>
                  <p className="text-sm">
                    Utilizado por los navegadores para solicitar y recibir páginas web. HTTPS es la versión segura (la
                    'S' es de "Secure"), que encripta la comunicación entre el navegador y el servidor.
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <Badge variant="secondary" className="mb-2">
                    FTP
                  </Badge>
                  <p className="text-sm">File Transfer Protocol: Para transferir archivos entre computadoras.</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <Badge variant="secondary" className="mb-2">
                    SMTP
                  </Badge>
                  <p className="text-sm">Simple Mail Transfer Protocol: Para el envío de correo electrónico.</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <Badge variant="secondary" className="mb-2">
                    UDP
                  </Badge>
                  <p className="text-sm">
                    Similar a TCP pero sin control de errores ni confirmaciones. Es más rápido y se usa en streaming,
                    videollamadas o juegos en línea donde la velocidad importa más que la fiabilidad.
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <Badge variant="secondary" className="mb-2">
                    DNS
                  </Badge>
                  <p className="text-sm">
                    Domain Name System: Traduce los nombres de dominio (ejemplo.com) en direcciones IP que las
                    computadoras entienden. Es como la "guía telefónica" de Internet.
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <Badge variant="secondary" className="mb-2">
                    DHCP
                  </Badge>
                  <p className="text-sm">
                    Dynamic Host Configuration Protocol: Asigna automáticamente direcciones IP a los dispositivos de una
                    red. Esto evita tener que configurarlas manualmente.
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <Badge variant="secondary" className="mb-2">
                    SSH
                  </Badge>
                  <p className="text-sm">
                    Secure Shell: Permite conectarse de manera remota y segura a otro equipo, muy usado en
                    administración de servidores.
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <Badge variant="secondary" className="mb-2">
                    SNMP
                  </Badge>
                  <p className="text-sm">
                    Simple Network Management Protocol: Se usa para monitorear y administrar dispositivos de red como
                    routers o switches.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Historia de Internet */}
        <section id="historia" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <History className="h-6 w-6 text-accent" />
                Historia de Internet
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed mb-6">
                La historia de Internet es una fusión de la necesidad militar de comunicación robusta y la visión
                académica de crear una red de conocimiento global. Fue la colaboración entre científicos, ingenieros y
                académicos lo que la convirtió en una herramienta de colaboración masiva.
              </p>
              <p className="leading-relaxed mb-6">
                El concepto de redes de computadoras se remonta a la Guerra Fría. La Agencia de Proyectos de
                Investigación Avanzada de Defensa (DARPA) de Estados Unidos buscó una manera de mantener las
                comunicaciones en caso de un ataque. El proyecto ARPANET se inició en 1969 con el objetivo principal de
                conectar universidades e instituciones de investigación para facilitar la colaboración científica.
              </p>
              <p className="leading-relaxed mb-8">
                En la década de 1970, Vint Cerf y Robert Kahn desarrollaron el Protocolo de Control de Transmisión (TCP)
                y el Protocolo de Internet (IP), una arquitectura abierta que permitió a redes heterogéneas comunicarse
                entre sí. La adopción de TCP/IP en 1983 marcó la transición de ARPANET a la red que conocemos como
                Internet.
              </p>

              <h3 className="text-xl font-semibold mb-6">Línea de Tiempo</h3>
              <div className="space-y-6">
                <div className="flex gap-4 p-4 bg-muted rounded-lg">
                  <div className="flex-shrink-0">
                    <Badge variant="outline" className="text-sm font-mono">
                      1969
                    </Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">ARPANET</h4>
                    <p className="text-sm">
                      Se establece la primera conexión entre computadoras de UCLA y SRI. Considerado el precursor
                      directo de Internet.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-muted rounded-lg">
                  <div className="flex-shrink-0">
                    <Badge variant="outline" className="text-sm font-mono">
                      1974
                    </Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">TCP/IP</h4>
                    <p className="text-sm">
                      Vint Cerf y Bob Kahn desarrollan el Protocolo de Control de Transmisión y el Protocolo de
                      Internet, la base de la comunicación en red.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-muted rounded-lg">
                  <div className="flex-shrink-0">
                    <Badge variant="outline" className="text-sm font-mono">
                      1989
                    </Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">La World Wide Web</h4>
                    <p className="text-sm">
                      Tim Berners-Lee propone la idea de la World Wide Web. Su objetivo es crear un sistema para
                      compartir información entre científicos.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-muted rounded-lg">
                  <div className="flex-shrink-0">
                    <Badge variant="outline" className="text-sm font-mono">
                      1993
                    </Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Mosaic</h4>
                    <p className="text-sm">
                      Se lanza el navegador Mosaic, el primer navegador gráfico popular, que hace la Web accesible para
                      el público general.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-muted rounded-lg">
                  <div className="flex-shrink-0">
                    <Badge variant="outline" className="text-sm font-mono">
                      1998
                    </Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Google</h4>
                    <p className="text-sm">
                      Larry Page y Sergey Brin fundan Google. Su algoritmo de clasificación revoluciona la búsqueda en
                      Internet.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-muted rounded-lg">
                  <div className="flex-shrink-0">
                    <Badge variant="outline" className="text-sm font-mono">
                      2004
                    </Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Web 2.0</h4>
                    <p className="text-sm">
                      Inicia la era de la "Web Social". Se fundan Facebook y Gmail, marcando el inicio de las
                      plataformas interactivas y del contenido generado por el usuario.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-muted rounded-lg">
                  <div className="flex-shrink-0">
                    <Badge variant="outline" className="text-sm font-mono">
                      2007
                    </Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">El iPhone</h4>
                    <p className="text-sm">
                      Apple lanza el iPhone, un dispositivo que transforma el acceso a Internet y la creación de
                      aplicaciones móviles.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-muted rounded-lg">
                  <div className="flex-shrink-0">
                    <Badge variant="outline" className="text-sm font-mono">
                      2010s
                    </Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Internet Móvil</h4>
                    <p className="text-sm">
                      Internet móvil domina gracias a smartphones y 4G. Se masifica el comercio electrónico y el uso de
                      la nube (Google Drive, Dropbox).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-muted rounded-lg">
                  <div className="flex-shrink-0">
                    <Badge variant="outline" className="text-sm font-mono">
                      2020s
                    </Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Era Actual</h4>
                    <p className="text-sm">
                      Consolidación del 5G, crecimiento del IoT (dispositivos conectados en casas, autos, fábricas) y
                      auge de la Web 3.0 con blockchain y descentralización.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Clasificación de Redes */}
        <section id="clasificacion" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Settings className="h-6 w-6 text-accent" />
                Clasificación de Redes y Medios de Transmisión
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold mb-4">Clasificación de Redes</h3>
              <p className="leading-relaxed mb-6">Las redes se clasifican principalmente por su alcance geográfico:</p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-muted rounded-lg">
                  <Badge className="mb-2">PAN</Badge>
                  <h4 className="font-semibold mb-2">Personal Area Network</h4>
                  <p className="text-sm">
                    Redes de muy corto alcance. Ej. Bluetooth, la conexión de tu teléfono con unos auriculares o un
                    smartwatch.
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <Badge className="mb-2">LAN</Badge>
                  <h4 className="font-semibold mb-2">Local Area Network</h4>
                  <p className="text-sm">
                    Redes que cubren un área pequeña, como un hogar, una oficina o un edificio. Ej. Tu red Wi-Fi
                    doméstica.
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <Badge className="mb-2">MAN</Badge>
                  <h4 className="font-semibold mb-2">Metropolitan Area Network</h4>
                  <p className="text-sm">
                    Redes que cubren un área metropolitana. Son más grandes que una LAN, pero más pequeñas que una WAN.
                    Ej. Una red que conecta varias sucursales de una empresa en una misma ciudad.
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <Badge className="mb-2">WAN</Badge>
                  <h4 className="font-semibold mb-2">Wide Area Network</h4>
                  <p className="text-sm">
                    Redes de largo alcance que cubren grandes distancias, como países o continentes. La Internet global
                    es el ejemplo más grande de una WAN.
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <Badge className="mb-2">CAN</Badge>
                  <h4 className="font-semibold mb-2">Campus Area Network</h4>
                  <p className="text-sm">
                    Red que conecta edificios dentro de un campus universitario, hospital o base militar.
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <Badge className="mb-2">SAN</Badge>
                  <h4 className="font-semibold mb-2">Storage Area Network</h4>
                  <p className="text-sm">
                    Diseñada específicamente para conectar servidores con sistemas de almacenamiento de datos a gran
                    escala.
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <Badge className="mb-2">VPN</Badge>
                  <h4 className="font-semibold mb-2">Virtual Private Network</h4>
                  <p className="text-sm">
                    Red privada que se construye sobre Internet para proporcionar comunicación segura y cifrada entre
                    usuarios remotos y la red central.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">Topologías de Red</h3>
              <p className="leading-relaxed mb-4">
                Además del alcance, las redes también se clasifican según cómo están conectados los dispositivos:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-accent/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Topología en Estrella:</h4>
                  <p className="text-sm">
                    Todos los nodos se conectan a un dispositivo central (switch o router). Es la más común en hogares y
                    oficinas.
                  </p>
                </div>
                <div className="p-4 bg-accent/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Topología en Bus:</h4>
                  <p className="text-sm">Un solo cable compartido conecta todos los nodos (poco usada hoy en día).</p>
                </div>
                <div className="p-4 bg-accent/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Topología en Anillo:</h4>
                  <p className="text-sm">Cada nodo se conecta al siguiente formando un círculo.</p>
                </div>
                <div className="p-4 bg-accent/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Topología en Malla:</h4>
                  <p className="text-sm">
                    Cada nodo está conectado a varios otros, lo que aumenta la redundancia y la tolerancia a fallos (muy
                    usada en redes críticas).
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">Medios de Transmisión</h3>
              <p className="leading-relaxed mb-4">Los datos viajan por un medio, que puede ser guiado o no guiado:</p>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Medios Guiados (Cableados):</h4>
                <p className="text-sm mb-3">Los datos viajan a través de un medio físico.</p>
                <div className="space-y-3">
                  <div className="p-3 bg-muted rounded">
                    <strong>Cable de Par Trenzado:</strong> Comúnmente usado en redes Ethernet. Económico pero
                    susceptible a interferencias.
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <strong>Cable Coaxial:</strong> Similar al de las televisiones por cable. Más resistente al ruido.
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <strong>Fibra Óptica:</strong> Envía pulsos de luz. Ofrece las mayores velocidades y distancias, con
                    inmunidad a las interferencias electromagnéticas.
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Medios No Guiados (Inalámbricos):</h4>
                <p className="text-sm mb-3">Los datos viajan a través del aire.</p>
                <div className="space-y-3">
                  <div className="p-3 bg-muted rounded">
                    <strong>Ondas de Radio:</strong> Usadas en Wi-Fi, Bluetooth y la radio FM. Son omnidireccionales y
                    pueden penetrar paredes.
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <strong>Microondas:</strong> Usadas para comunicaciones satelitales y enlaces de larga distancia.
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <strong>Infrarrojos:</strong> Usados en controles remotos. Requieren línea de vista directa.
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Redes Inalámbricas y Espectro Electromagnético</h4>
                <p className="text-sm leading-relaxed mb-3">
                  Las redes inalámbricas, como el Wi-Fi, funcionan utilizando ondas de radio, una parte del{" "}
                  <strong>espectro electromagnético</strong>. Este espectro es el rango de todas las radiaciones
                  electromagnéticas. Cada servicio, desde la radio FM hasta las microondas y la luz visible, ocupa una
                  "banda" de frecuencia distinta para evitar interferencias.
                </p>
                <h5 className="font-semibold mb-2">Cómo Funciona la Red Celular</h5>
                <p className="text-sm leading-relaxed">
                  Las redes celulares se basan en la división de un área geográfica en "células" o celdas. Cada celda
                  tiene una antena base (una torre de telefonía) que se comunica con los dispositivos móviles en su
                  área. Cuando te mueves de una celda a otra, tu teléfono automáticamente se "transfiere" (un proceso
                  llamado handover) a la antena más cercana, asegurando una conexión continua. Tecnologías como 5G
                  (quinta generación) se centran en densificar estas celdas y usar frecuencias más altas para ofrecer
                  velocidades de descarga y latencia mucho menores.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Modelos de Sistemas Distribuidos */}
        <section id="sistemas-distribuidos" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Users className="h-6 w-6 text-accent" />
                Modelos de Sistemas Distribuidos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed mb-6">
                Un sistema distribuido es una colección de computadoras autónomas que aparecen ante los usuarios como un
                único sistema coherente. El principal objetivo es compartir recursos, mejorar la fiabilidad y aumentar
                el rendimiento. El modelo más común y fundamental de sistema distribuido es el modelo cliente-servidor.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-accent/10 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Modelo Cliente-Servidor</h3>
                  <p className="text-sm leading-relaxed mb-4">En este modelo, hay dos tipos de procesos:</p>
                  <div className="space-y-3">
                    <div className="p-3 bg-background rounded border">
                      <strong>Cliente:</strong> Un programa que solicita un servicio a otro programa. Es el iniciador de
                      la comunicación. Tu navegador web es un cliente cuando solicita una página a un servidor.
                    </div>
                    <div className="p-3 bg-background rounded border">
                      <strong>Servidor:</strong> Un programa que ofrece un servicio. Espera las peticiones de los
                      clientes. El servidor de Instagram que almacena y envía fotos es un ejemplo.
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed mt-4">
                    Este modelo es la base de la mayoría de las aplicaciones en Internet. Un servidor puede manejar a
                    múltiples clientes simultáneamente y los clientes no necesitan conocer los detalles internos del
                    servidor, solo cómo comunicarse con él a través de un protocolo bien definido.
                  </p>
                </div>

                <div className="p-6 bg-secondary/10 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Modelo Punto a Punto (Peer-to-Peer - P2P)</h3>
                  <p className="text-sm leading-relaxed">
                    En contraste, en un sistema P2P, cada nodo puede actuar como cliente y como servidor, compartiendo
                    recursos directamente con otros nodos sin la necesidad de un servidor central. Ejemplos incluyen
                    redes de torrents para compartir archivos o algunas criptomonedas. Bitcoin, por ejemplo, utiliza una
                    red P2P para verificar transacciones de forma descentralizada.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">Modelos de Sistemas Distribuidos</h3>
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Modelo Híbrido:</h4>
                  <p className="text-sm">
                    Combinación de cliente-servidor y P2P. Ejemplo: Skype y WhatsApp usan servidores centrales para
                    autenticación, pero luego permiten conexiones directas entre usuarios para optimizar el rendimiento.
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">Arquitectura de Nube:</h4>
                  <p className="text-sm">
                    La nube (AWS, Google Cloud, Azure) es un ejemplo de sistema distribuido donde los recursos se
                    reparten en miles de servidores y centros de datos en el mundo.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Evolución de la Web */}
        <section id="evolucion-web" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Globe className="h-6 w-6 text-accent" />
                Evolución de la Web
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="outline" className="text-lg px-3 py-1">
                      Web 1.0
                    </Badge>
                    <span className="text-sm text-muted-foreground">(1991-2004)</span>
                  </div>
                  <p className="leading-relaxed mb-4">
                    La <strong>Web 1.0</strong> es conocida como la "Web de solo lectura". Su característica principal
                    era la naturaleza estática de las páginas, lo que significaba que el contenido era fijo y solo podía
                    ser consumido, no modificado, por el usuario. La interacción era mínima, limitada a la navegación a
                    través de enlaces. Los sitios web eran esencialmente folletos digitales.
                  </p>
                  <p className="text-sm">
                    <strong>Tecnologías Clave:</strong> HTML y los primeros navegadores como Netscape Navigator y
                    Mosaic. No existían las bases de datos dinámicas en la mayoría de los sitios. Los sitios web eran
                    esencialmente folletos digitales.
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="outline" className="text-lg px-3 py-1">
                      Web 2.0
                    </Badge>
                    <span className="text-sm text-muted-foreground">(2004-presente)</span>
                  </div>
                  <p className="leading-relaxed mb-4">
                    La <strong>Web 2.0</strong> transformó Internet en una plataforma interactiva y social, donde el
                    contenido es generado por el usuario. Los sitios web se volvieron dinámicos y colaborativos,
                    permitiendo que las personas no solo consumieran, sino que también crearan y compartieran contenido.
                    Este cambio marcó el inicio de la era de las redes sociales, los blogs y las wikis.
                  </p>
                  <p className="text-sm">
                    <strong>Tecnologías Clave:</strong> AJAX (Asynchronous JavaScript and XML) permitió actualizar
                    partes de una página sin tener que recargarla por completo. Las APIs (Application Programming
                    Interfaces) facilitaron la integración de servicios entre diferentes plataformas.
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="outline" className="text-lg px-3 py-1">
                      Web 3.0
                    </Badge>
                    <span className="text-sm text-muted-foreground">(en desarrollo)</span>
                  </div>
                  <p className="leading-relaxed mb-4">
                    La <strong>Web 3.0</strong> representa un salto hacia una web más inteligente y descentralizada. Se
                    basa en el concepto de la "web semántica", donde las máquinas pueden entender, interpretar y
                    organizar la información de manera más contextual y humana. El objetivo es eliminar la dependencia
                    de intermediarios centralizados y devolver el control de los datos a los usuarios.
                  </p>
                  <p className="text-sm mb-3">
                    <strong>Tecnologías Clave:</strong> La inteligencia artificial (IA) para procesar datos de forma más
                    eficiente y la tecnología blockchain para crear un entorno descentralizado y seguro. Las
                    criptomonedas y los NFTs (Tokens No Fungibles) son aplicaciones directas de esta tecnología.
                  </p>
                  <p className="text-sm">
                    <strong>Hitos:</strong> El surgimiento de las blockchains, las criptomonedas, los contratos
                    inteligentes y las finanzas descentralizadas (DeFi).
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="outline" className="text-lg px-3 py-1">
                      Web 4.0
                    </Badge>
                    <span className="text-sm text-muted-foreground">(futuro)</span>
                  </div>
                  <p className="leading-relaxed mb-4">
                    La <strong>Web 4.0</strong> es un concepto futurista que se centra en la integración de la
                    inteligencia artificial y la conectividad ubicua para crear una "web simbiótica". La idea es que la
                    web actúe como un asistente inteligente, proactivo y contextual que anticipe las necesidades del
                    usuario y ofrezca soluciones personalizadas en tiempo real.
                  </p>
                  <p className="text-sm mb-3">
                    Se espera que la Web 4.0 se caracterice por una interacción más fluida entre humanos y máquinas,
                    donde los dispositivos y las aplicaciones se comuniquen entre sí de manera autónoma para optimizar
                    la experiencia del usuario. La realidad virtual y aumentada, el Internet de las Cosas (IoT) y la
                    computación en la nube serán los pilares de esta nueva era.
                  </p>
                  <p className="text-sm">
                    <strong>Hitos:</strong> Se espera una integración total entre la inteligencia artificial y los
                    asistentes de voz, así como la capacidad de los dispositivos de aprender y adaptarse a los hábitos y
                    preferencias del usuario.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Organizaciones Reguladoras */}
        <section id="organizaciones" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Organizaciones Reguladoras de Internet</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed mb-6">
                Internet es una red global y descentralizada, pero su funcionamiento y evolución están guiados por
                varias organizaciones internacionales. Estas organizaciones establecen estándares, asignan recursos y
                supervisan políticas para mantener la red abierta y funcional.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded-lg">
                  <Badge className="mb-2">ICANN</Badge>
                  <h4 className="font-semibold mb-2">Internet Corporation for Assigned Names and Numbers</h4>
                  <p className="text-sm">
                    Es responsable de la gestión de los nombres de dominio y las direcciones IP globales. Su principal
                    función es asegurar la estabilidad y seguridad de los identificadores únicos de Internet.
                  </p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <Badge className="mb-2">IETF</Badge>
                  <h4 className="font-semibold mb-2">Internet Engineering Task Force</h4>
                  <p className="text-sm">
                    Es una comunidad de ingenieros, diseñadores de redes, operadores y científicos que se dedican a la
                    evolución de la arquitectura de Internet y a la operación fluida de la misma. Crean y mantienen los
                    estándares de protocolos como TCP/IP, HTTP, etc.
                  </p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <Badge className="mb-2">W3C</Badge>
                  <h4 className="font-semibold mb-2">World Wide Web Consortium</h4>
                  <p className="text-sm">
                    Liderado por Tim Berners-Lee, el W3C se dedica a crear estándares web para asegurar el crecimiento a
                    largo plazo de la Web. Desarrollan especificaciones para HTML, CSS, XML, y otras tecnologías web.
                  </p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <Badge className="mb-2">ISO</Badge>
                  <h4 className="font-semibold mb-2">International Organization for Standardization</h4>
                  <p className="text-sm">Crea estándares internacionales, como el modelo de referencia OSI.</p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <Badge className="mb-2">IEEE</Badge>
                  <h4 className="font-semibold mb-2">Institute of Electrical and Electronics Engineers</h4>
                  <p className="text-sm">Define estándares para Wi-Fi (802.11), Ethernet (802.3) y Bluetooth.</p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <Badge className="mb-2">ISOC</Badge>
                  <h4 className="font-semibold mb-2">Internet Society</h4>
                  <p className="text-sm">
                    Promueve el desarrollo abierto y la accesibilidad de Internet en todo el mundo.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Seguridad en Redes */}
        <section id="seguridad" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Shield className="h-6 w-6 text-accent" />
                Seguridad en Redes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed mb-6">
                La seguridad es fundamental en cualquier red para proteger la información y garantizar el correcto
                funcionamiento de los servicios.
              </p>

              <div className="bg-destructive/10 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4">Principios básicos de seguridad (CIA Triad):</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-background rounded border">
                    <Lock className="h-6 w-6 mb-2 text-destructive" />
                    <h4 className="font-semibold mb-2">Confidencialidad:</h4>
                    <p className="text-sm">Solo usuarios autorizados pueden acceder a la información.</p>
                  </div>
                  <div className="p-4 bg-background rounded border">
                    <Shield className="h-6 w-6 mb-2 text-destructive" />
                    <h4 className="font-semibold mb-2">Integridad:</h4>
                    <p className="text-sm">Los datos no pueden ser alterados de manera no autorizada.</p>
                  </div>
                  <div className="p-4 bg-background rounded border">
                    <Zap className="h-6 w-6 mb-2 text-destructive" />
                    <h4 className="font-semibold mb-2">Disponibilidad:</h4>
                    <p className="text-sm">Los servicios deben estar siempre accesibles.</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Amenazas comunes:</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded">
                      <strong>Malware</strong> (virus, gusanos, troyanos).
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <strong>Phishing</strong> (suplantación de identidad para robar datos).
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <strong>Ataques DDoS</strong> (inundar un servidor para dejarlo fuera de servicio).
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <strong>Ransomware</strong> (cifrado de datos a cambio de rescate).
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Medidas de protección:</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-accent/10 rounded">
                      <strong>Firewalls</strong> y sistemas de detección de intrusos (IDS/IPS).
                    </div>
                    <div className="p-3 bg-accent/10 rounded">
                      <strong>VPN</strong> para navegación segura.
                    </div>
                    <div className="p-3 bg-accent/10 rounded">
                      <strong>Autenticación multifactor</strong> (MFA).
                    </div>
                    <div className="p-3 bg-accent/10 rounded">
                      <strong>Cifrado de datos</strong> en tránsito y en reposo.
                    </div>
                    <div className="p-3 bg-accent/10 rounded">
                      <strong>Actualización constante</strong> de software y hardware.
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm opacity-90">Documentación profesional sobre Redes Informáticas - Creado con v0.app</p>
        </div>
      </footer>
    </div>
  )
}
