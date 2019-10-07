/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.pmsys;

/**
 *
 * @author Aluno
 */
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.sql.Connection;


import com.microsoft.sqlserver.jdbc.SQLServerDataSource;
import com.microsoft.sqlserver.jdbc.SQLServerException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JOptionPane;


public class ConnectURL {
    
    public static Connection conexao(){
        
        Connection conexao = null;
        
        String URL = "jdbc:sqlserver://srvdotsys.database.windows.net:1433;databaseName=bddotsys;user=userdotsys;password=#Gfgrupo6";
        
        
        try{
            conexao = DriverManager.getConnection(URL);
        }catch(SQLException ex){
            JOptionPane.showMessageDialog(null, "Erro do Sql \n" + ex, "Erro", JOptionPane.ERROR_MESSAGE);
        }
        
        return conexao;
                
    }
    
    public static boolean FecharConexao(){
        try{
            ConnectURL.conexao().close();
            return true;
        }catch(SQLException e){
            return false;
        }
    }
        
        
        
        
        
         //Create a variable for the connection string.
        /*String connectionUrl = "jdbc:sqlserver://srvdotsys.database.windows.net:1433;database=bddotsys;user=userdotsys@srvdotsys;password='#Gfgrupo6';encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;loginTimeout=30;";

        try (Connection con = DriverManager.getConnection(connectionUrl); Statement stmt = con.createStatement();) {
            //String SQL = "SELECT TOP 10 * FROM AcessoUsuario";
            //ResultSet rs = stmt.executeQuery(SQL);
            //String nome = "SELECT USUARIO FROM AcessoUsuario";
            //String senha = "SELECT SENHA FROM AcessoUsuario";
            
            TelaLogin login = new TelaLogin();
            String SQL = "Select * from AcessoUsuario where usuario = '"+ login.login2+"';";
            ResultSet rs = stmt.executeQuery(SQL);
            
            // Iterate through the data in the result set and display it.
            
                while(rs.next()) {
                     login1 = rs.getString("usuario");
                     senha1 = rs.getString("senha");

        }}
        // Handle any errors that may have occurred.
        catch (SQLException e) {
            e.printStackTrace();
        }*/
        
    
   }

