FROM python:3.6
WORKDIR ~/Desktop/program/WebSys/Python
ADD ./app
RUN pip3 install --trusted-host pypi.pyton.org -r requirements.txt
EXPOSE 80
ENV NAME Hello
CMD ["python", "app.py"]