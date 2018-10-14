ZK Bootstrap Theme
==============================

This project is a customized theme for demonstrating ZK 7.0.0 with Bootstrap, distributed under [GNU General Public License, Version 2.0](http://www.gnu.org/licenses/gpl.html).


Build Instructions
-----

To Compile user: mvn clean package

To install jar in the local repository, first run mvn clean package, 
them use:

mvn install:install-file -Dfile=target/zk-bootstrap-2.0.jar -DpomFile=pom.xml -Dsources=target/zk-bootstrap-2.0-sources.jar -Djavadoc=target/zk-bootstrap-2.0-javadoc.jar -DgroupId=org.zkoss.addons -DartifactId=zk-bootstrap -Dversion=2.0 -Dpackaging=jar



Links
-----

  * [Demo Page](http://www.zkoss.org/zk-bootstrap/)
  * [Documentation](http://books.zkoss.org/wiki/ZK_Developer%27s_Reference/Theming_and_Styling/ZK_Official_Themes/ZK_Bootstrap_Theme)
  * [Download](https://github.com/jumperchen/zk-bootstrap/releases)
  * [Blog](http://blog.zkoss.org/index.php/2013/09/03/zk-7-zk-components-x-bootstrap-3/)
  * [License](http://www.gnu.org/licenses/gpl.html)
  

