import os


# print(os.getcwd())
DIR = os.getcwd()+'\img'
PATH = os.getcwd()+'/procesing/webp/bin/cwebp'

os.chdir(DIR)
images = sorted(os.listdir(DIR))
for img in images:
    if img.endswith(('.jpg', '.png')): # если имя оканчивается на что-то из tuple...
        name = os.path.splitext(img)[0] # имя фаила без расширения
        os.system(f"{PATH} -exact -q 100 {img} -o {name}.webp") # выполнение команды преобразования через консоль
        # -lossless  # лослесс параметр
        
        
        # print(img) # выводим имя файла
        # print(DIR)
        
        
        # path = "d:/Programing/web_project/HTML/Grill_House/procesing/webp/bin/cwebp"
                
        # command = path, '-exact', '-q', '100', img, '-o', 'test.webp'
        # os.system(command)
                
        # import subprocess
        # command = path, '-exact', '-q', '100', img, '-o', 'test.webp'
        # subprocess.run(command)



# result = subprocess.run(['ping', '3', '-n', '8.8.8.8'])

