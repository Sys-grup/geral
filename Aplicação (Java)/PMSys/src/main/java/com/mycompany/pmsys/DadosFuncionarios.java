package com.mycompany.pmsys;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import javax.swing.JOptionPane;
import org.springframework.jdbc.core.JdbcTemplate;

/**
 *
 * @author Aluno
 */
public class DadosFuncionarios {

    private String idFunc;
    private String nomeFunc;

    public DadosFuncionarios(Integer squad) {

        ConnectURL dadosConexao = new ConnectURL();
        JdbcTemplate jdbcTemplate = new JdbcTemplate(dadosConexao.getDataSource());

        List selectFuncionario = jdbcTemplate.queryForList("SELECT * tblFuncionario where tblSquad_idSquad = ?",  squad);
        //System.out.println("Todos:\n"+ selectHD);

//     Connection conn = ConnectURL.conexao();
//        
//        try{
//            String selectFuncionario = "SELECT * tblFuncionario where tblSquad_idSquad =" + squad;
//            PreparedStatement stmt = conn.prepareStatement(selectFuncionario);
//            ResultSet rs = stmt.executeQuery(selectFuncionario);
//            
//            while (rs.next()){
//                
//                this.idFunc = rs.getString(2);
//                this.nomeFunc = rs.getString(3);
//                
//            }
//  
//            
//    }catch(SQLException ex){
//            JOptionPane.showMessageDialog(null, "Erro do Sql \n" + ex, "Erro", JOptionPane.ERROR_MESSAGE);
//        }
    }

    public String getIdFunc() {
        return idFunc;
    }

    public String getNomeFunc() {
        return nomeFunc;
    }

}
