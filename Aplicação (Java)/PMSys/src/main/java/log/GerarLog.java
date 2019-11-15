
package log;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import javax.swing.JOptionPane;

/**
 *
 * @author Alex Gusmão
 */
public class GerarLog {
    
    private static void verificaExistencia(File arquivo){
        boolean existe = arquivo.exists();
        
        try{
            if(!existe){
                arquivo.createNewFile();
            }
        }catch(IOException e){
            JOptionPane.showMessageDialog(null, "Erro ao criar arquivo!\n" + e.getMessage(), "Erro", JOptionPane.ERROR_MESSAGE);
        }
        
    }
    
    public static void escreverLog(String mensagem){
        try{
            File arquivo = new File("C:/temp/app_logs.txt");
            
            verificaExistencia(arquivo);
            
            FileWriter fw = new FileWriter(arquivo, true);
            BufferedWriter writer = new BufferedWriter(fw);
            
            writer.write(mensagem);
            writer.newLine();
            
            writer.close();
            fw.close();
            
        }catch(IOException e){
            JOptionPane.showMessageDialog(null, "Erro ao criar arquivo!\n" + e.getMessage(), "Erro", JOptionPane.ERROR_MESSAGE);
        }
        
    }
    
}
